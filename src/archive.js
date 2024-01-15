import React from "react";
import { archiveStyles } from "../styles/archiveStyles";
import { globalStyle } from "../styles/style";
import { TouchableOpacity, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Platform } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { useState, useEffect } from 'react';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';

export const Archive= ({ navigation }) => {
  const [db, setDb] = useState(SQLite.openDatabase('example.db'));
  const [isLoading, setIsLoading] = useState(true);
  const [names, setNames] = useState([]);
  const [currentName, setCurrentName] = useState(undefined);


 
 
  const exportDb = async () => {
    if (Platform.OS === "android") {
      const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
      if (permissions.granted) {
        const base64 = await FileSystem.readAsStringAsync(
          FileSystem.documentDirectory + 'SQLite/example.db',
          {
            encoding: FileSystem.EncodingType.Base64
          }
        );

        await FileSystem.StorageAccessFramework.createFileAsync(permissions.directoryUri, 'example.db', 'application/octet-stream')
        .then(async (uri) => {
          await FileSystem.writeAsStringAsync(uri, base64, { encoding : FileSystem.EncodingType.Base64 });
        })
        .catch((e) => console.log(e));
      } else {
        console.log("Permission not granted");
      }
    } else {
      await Sharing.shareAsync(FileSystem.documentDirectory + 'SQLite/example.db');
    }
  }


  const importDb = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: true
    });

    if (result.type === 'success') {
      setIsLoading(true);
      
      if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
      }

      const base64 = await FileSystem.readAsStringAsync(
        result.uri,
        {
          encoding: FileSystem.EncodingType.Base64
        }
      );

      await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'SQLite/example.db', base64, { encoding: FileSystem.EncodingType.Base64 });
      await db.closeAsync();
      setDb(SQLite.openDatabase('example.db'));
    }
  };




  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS names (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)')
    });

    db.transaction(tx => {
      tx.executeSql('SELECT * FROM names', null,
        (txObj, resultSet) => setNames(resultSet.rows._array),
        (txObj, error) => console.log(error)
      );
    });

    setIsLoading(false);
  }, [db]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading names...</Text>
      </View>
    );
  }




  const addName = () => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO names (name) values (?)', [currentName],
        (txObj, resultSet) => {
          let existingNames = [...names];
          existingNames.push({ id: resultSet.insertId, name: currentName});
          setNames(existingNames);
          setCurrentName(undefined);
        },
        (txObj, error) => console.log(error)
      );
    });
  }

  const deleteName = (id) => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM names WHERE id = ?', [id],
        (txObj, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            let existingNames = [...names].filter(name => name.id !== id);
            setNames(existingNames);
          }
        },
        (txObj, error) => console.log(error)
      );
    });
  };

  const updateName = (id) => {
    db.transaction(tx => {
      tx.executeSql('UPDATE names SET name = ? WHERE id = ?', [currentName, id],
        (txObj, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            let existingNames = [...names];
            const indexToUpdate = existingNames.findIndex(name => name.id === id);
            existingNames[indexToUpdate].name = currentName;
            setNames(existingNames);
            setCurrentName(undefined);
          }
        },
        (txObj, error) => console.log(error)
      );
    });
  };

  const showNames = () => {
    return names.map((name, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text>{name.name}</Text>
          <Button color = 'rgba(90, 100, 87, 1)' title='Delete' onPress={() => deleteName(name.id)} />
          <Button color = 'rgba(90, 100, 87, 1)' title='Update' onPress={() => updateName(name.id)} />
        </View>
      );
    });
  };

  return( 
   <View style={[ globalStyle.container]}>
    <TouchableOpacity style={archiveStyles.arrow} onPress={() => {navigation.navigate("FirstChoice"); }}>
      <Image source={require("../assets/images/arrow.png")}/>
    </TouchableOpacity>
    <Text style={[globalStyle.text, globalStyle.headerText, archiveStyles.headerText]}>Архів</Text>
     <TextInput style={[archiveStyles.input]} value={currentName} placeholder='name' onChangeText={setCurrentName} />
      <Button color = 'rgba(90, 100, 87, 1)' title="Add Name" onPress={addName} />
      {showNames()}
      <Button color = 'rgba(90, 100, 87, 1)' title="Export Db" onPress={exportDb} />
      <Button color = 'rgba(90, 100, 87, 1)' title="Import Db" onPress={importDb} />
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    margin: 8
  }
});

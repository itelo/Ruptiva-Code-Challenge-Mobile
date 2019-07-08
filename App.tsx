/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  TextInput,
  TouchableOpacity,
  Animated,
  FlatList,
} from 'react-native';
import Checkbox from '@components/Checkbox';
import ThemeContext from '@utils/styles/ThemeContext';
import Input from '@components/Input/Input';
import { formatCPF, validateCPF } from '@utils/cpf';
import { formatCNPJ, validateCnpj } from '@utils/cnpj';
import useToggle from '@utils/useToggle';
import BottomCard from '@components/BottomCard/BottomCard';
import Button from '@components/Button';
import ErrorBox from '@components/ErrorBox';
import {db} from "@utils/firebase";
import UserDisplay from '@components/UserDisplay';
enum PersonType {
  individual = "individual",
  business = "business"
}

const App = () => {
  const [document, setDocument] = React.useState("");
  const [nameText, setNameText] = React.useState("");
  const [docs, setDocs] = React.useState([]);
  const [error, setError] = React.useState("");
  const [personType, setPersonType] = React.useState(PersonType.business);
  const [isOpen, toggleOpen] = useToggle(false);
  const [isLoading, toggleLoading] = useToggle(false);
  const [isLoadingMore, toggleLoadingMore] = useToggle(false);
  const theme = React.useContext(ThemeContext);
  const isIndividual = React.useMemo(() => personType === PersonType.individual, [personType]);

  const setNewPersonType = React.useCallback((_personType) => {
    setPersonType(_personType);
    setDocument("");
    setError("");
  }, [isIndividual]);

  const onSubmit = () => {
    toggleLoading();
    let _error = "";

    const exp = /\.|\-|\//g;
    const cleanDocument = document.toString().replace(exp, '');

    if (nameText.length === 0) {
      _error = 'Nome é um campo obrigatório'
    } else if (cleanDocument.length === 0) {

      const field = personType === PersonType.individual ? "Cpf" : "Cnpj";
      _error = `${field} é um campo obrigatório`;
    } else {
      const field = personType === PersonType.individual ? "Cpf" : "Cnpj";
      const validateFunc = personType === PersonType.individual ? validateCPF : validateCnpj;
      if (!validateFunc(cleanDocument)) {
        _error = `${field} não é valido`;
      }
    }

    if (_error.length > 0) {
      setError(_error);
      toggleLoading()
    } else {
      setError("");
      db.collection("cities").add({
        name: nameText,
        document: cleanDocument,
        type: personType
      })
      .then(() => {
          toggleLoading();
          setDocument("");
          setNameText("");
      })
      .catch((err) => {
        Alert.alert("err", err);
        setError("Erro ao salvar documento");
        toggleLoading();
      });
    }
  };

  React.useEffect(() => {
    db.collection("cities").get().then((querySnapshot) => {
      const _docs = []
      querySnapshot.forEach((doc) => {
          _docs.push(doc.data());
      });

      setDocs(_docs);
    });
  }, []);

  const refresh = () => {
    toggleLoadingMore()
    db.collection("cities").get().then((querySnapshot) => {
      const _docs = []
      querySnapshot.forEach((doc) => {
        _docs.push(doc.data());
      });
      
      setDocs(_docs);
      toggleLoadingMore();
    });
  }


  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <View style={{
        flex: 1,
        position: "relative"
      }}>

        <BottomCard isOpen={isOpen} onPress={() => toggleOpen()} title="Usuários">
          <FlatList
            onRefresh={refresh}
            data={docs}
            refreshing={isLoadingMore}
            renderItem={({item}) => <UserDisplay 
            name={item.name}
            document={item.document}
            type={item.type}/> }
          />
          </BottomCard>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{
            flex: 1,
          }}>
            <View style={{
              marginHorizontal: 48
            }}>
              <Text style={{
                ...theme.typography.body1,
              }}>
                Tipo de Pessoa
              </Text>
              <View style={{ height: 4 }} />
              <Checkbox
                disabled={isLoading}
                onPress={() => setNewPersonType(PersonType.individual)}
                checked={isIndividual}
                label="Pessoa fisica"
              />
              <View style={{ height: 4 }} />
              <Checkbox
                disabled={isLoading}
                onPress={() => setNewPersonType(PersonType.business)}
                checked={!isIndividual}
                label="Pessoa juridica"
              />
            </View>
            <View style={{ height: 4 }} />
            <Input
              disabled={isLoading}
              placeholder="Nome"
              value={nameText}
              onChangeText={setNameText}
            />
            <View style={{ height: 4 }} />
            <Input
              disabled={isLoading}
              value={document}
              placeholder={isIndividual ? "CPF" : "CNPJ"}
              onChangeText={document => {
                if (isIndividual) {
                  setDocument(formatCPF(document));
                } else {
                  setDocument(formatCNPJ(document));
                }
              }}
            />
            {
              error.length > 0 && 
              <React.Fragment>
                <View style={{ height: 4 }} />
                <ErrorBox message={error} />
              </React.Fragment>
            }
            <View style={{ height: 4 }} />
            <Button
              disabled={isLoading}
              isLoading={isLoading}
              label="Cadastrar"
              loadingLabel="Enviando"
              onPress={onSubmit}
            />
          </View>
        </SafeAreaView>
      </View>
    </Fragment>
  );
};

export default App;

import React, {Component} from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao'

export const Entrada = props =>
    <View>
        <TextInput value={props.texto}
            Style={Padrao.input}
            onChangeText={props.ChamarQuandoMudar}
        />
    </View>

export default class TextoSincronizado extends Component{
    state = {
        texto: ''
    }

    alterarTexto = texto => {
        this.setState({texto})
    }

    render(){
        return (
            <View  style={Padrao.container}>
                <Text>TEste</Text>
                <Text style={{borderWidth:2, borderColor: 'gray'}}>{this.state.texto}</Text>
                <Entrada texto={this.state.texto}
                    ChamarQuandoMudar={this.alterarTexto}
                    style={{borderWidth:2, borderColor: 'gray'}}
                />
            </View>
        )
    }
}
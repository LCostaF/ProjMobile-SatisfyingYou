import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"

const Relatorio = () => {

    return(
        <View style={estilos.root}>

            <View style={estilos.cGrafico}>
                <Image style={estilos.grafico} source={require("../../assets/images/pie-chart.png")}/>
            </View>

            <View style={estilos.cLegendas}>
                <View style={estilos.cLegenda}>
                    <Icon name="stop" size={40} color="#F1CE7E" />
                    <Text style={estilos.legenda}>Excelente</Text>
                </View>
                <View style={estilos.cLegenda}>
                    <Icon name="stop" size={40} color="#6994FE" />
                    <Text style={estilos.legenda}>Bom</Text>
                </View>
                <View style={estilos.cLegenda}>
                    <Icon name="stop" size={40} color="#5FCDA4" />
                    <Text style={estilos.legenda}>Neutro</Text>
                </View>
                <View style={estilos.cLegenda}>
                    <Icon name="stop" size={40} color="#EA7288" />
                    <Text style={estilos.legenda}>Ruim</Text>
                </View>
                <View style={estilos.cLegenda}>
                    <Icon name="stop" size={40} color="#53D8D8" />
                    <Text style={estilos.legenda}>Péssimo</Text>
                </View>
            </View>
          
        </View>
    )
  }
  
  //Estilos
  const estilos = StyleSheet.create({
    
    root: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: "center",
      backgroundColor: '#372775',
      //padding: 10
    },
    titulo: {
      fontSize: 24,
      fontFamily: 'AveriaLibre-Regular',
      color: '#FFFFFF',
  
    },
    cGrafico: {
        color: "#FFFFFF",
        width: "40%",
        height: "80%"
    },
    cLegendas: {
        flexDirection: "column",
        justifyContent: "space-around",
        height: "50%",
        marginTop: 70
    },
    cLegenda: {
        flexDirection: "row",
        alignItems: "center"
    },
    grafico: {
        marginTop: 20,
        width: 250,
        height: 250
    },
    legenda: {
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular',
        color: '#FFFFFF',
    
    }    
    
    
  })
  
  export default Relatorio
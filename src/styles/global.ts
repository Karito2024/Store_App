import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `#fff`,
        padding: 10,
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7fc5d9', // Fondo oscuro para mayor contraste
        padding: 20,
    },
    tittle: {
        fontSize: 24,
        fontWeight: `bold`,
        marginVertical: 10,
        textAlign: `center`,
    },
    card: {
        marginBottom: 10, // Espaciado inferior entre tarjetas
        padding: 10, // Espaciado interno
        backgroundColor: 'white', // Fondo blanco
        borderRadius: 10, // Bordes redondeados
    },
    image: {
        width: '100%', // Imagen ocupa todo el ancho del contenedor
        height: 200, // Altura fija de 200px
        borderRadius: 10, // Bordes redondeados
    },
    name: {
        fontSize: 18, // Tamaño de fuente grande para el nombre
        fontWeight: 'bold', // Texto en negrita
        marginTop: 5, // Espaciado superior
    },
    image2: {
        width: 250,
        height: 250,
        borderRadius: 125, // Hace la imagen circular
        borderWidth: 4,
        borderColor: '#0e1981', // Borde azul neón
        marginBottom: 20,
    },
    name2: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 10,
        textAlign: 'center',
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        backgroundColor: '#141717',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00D1FF',
    },

});
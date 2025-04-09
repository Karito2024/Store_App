import { StyleSheet } from "react-native";

export default StyleSheet.create({
    authContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(255, 240, 245, 0.8)', // Rosa muy claro con transparencia
    },
    authBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    authTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#d85a7f', // Rosa medio
        textAlign: 'center',
        marginBottom: 30,
        fontFamily: 'sans-serif-light',
        textShadowColor: 'rgba(255, 255, 255, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    authInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 1,
        borderColor: '#ffb6c1', // Rosa claro
        padding: 15,
        marginBottom: 20,
        borderRadius: 25,
        fontSize: 16,
        color: '#d85a7f',
        shadowColor: '#ffb6c1',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    authButton: {
        backgroundColor: '#ff8fab', // Rosa pastel
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginVertical: 10,
        shadowColor: '#d85a7f',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    authButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    authFooterText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#d85a7f',
    },
    authLinkText: {
        color: '#ff8fab',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    // Decoraciones cute
    cuteDecoration: {
        position: 'absolute',
        width: 100,
        height: 100,
        opacity: 0.6,
    },
    // Estilos generales
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',

    },
    container3: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 15,

    },
    container2: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },

    // Encabezados
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginVertical: 20,
        textAlign: 'center',
    },
    subHeader: {
        fontSize: 20,
        fontWeight: '600',
        color: '#34495e',
        marginBottom: 15,
    },

    // Tarjetas de producto
    productCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,

    },

    // Imágenes
    productImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 15,
    },
    thumbnailImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 10,
    },

    // Textos
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 8,
    },
    productDescription: {
        fontSize: 14,
        color: '#7f8c8d',
        marginBottom: 12,
        lineHeight: 20,
    },
    productPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#e74c3c',
    },
    originalPrice: {
        fontSize: 16,
        color: '#95a5a6',
        textDecorationLine: 'line-through',
        marginRight: 10,
    },
    discountBadge: {
        backgroundColor: '#e74c3c',
        color: 'white',
        padding: 4,
        borderRadius: 4,
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 10,
    },

    // Detalles del producto
    detailContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        margin: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    detailLabel: {
        fontWeight: 'bold',
        color: '#34495e',
    },
    detailValue: {
        color: '#2c3e50',
    },

    // Botones
    primaryButton: {
        backgroundColor: '#ff8fab', // Rosa pastel
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },

    // Formularios
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 12,
        marginBottom: 15,
        borderRadius: 8,
        backgroundColor: '#fff',
    },

    // Rating
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    ratingText: {
        marginLeft: 5,
        color: '#f39c12',
        fontWeight: 'bold',
    },

    // Galería de imágenes
    galleryContainer: {
        marginTop: 15,
    },
    galleryImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 10,
    },
    searchContainer: {
        top: -20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        
    },
    searchInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ffb6c1', // Rosa claro
        padding: 10,
        borderRadius: 8,
        marginRight: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: '#d85a7f',
        shadowColor: '#ffb6c1',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        borderColor: '#ffb6c1', // Rosa claro
        
    },
    pageText: {
        fontSize: 16,
        color: '#7f8c8d',
    },
    totalText: {
        textAlign: 'center',
        color: '#95a5a6',
        marginBottom: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // Estilos para el encabezado con botón de salir
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    logoutButton: {
        backgroundColor: '#ff8fab',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 15,
    },
    logoutText: {
        color: 'white',
        fontWeight: 'bold',
    },

    // Barra de búsqueda más compacta
    searchContainerCompact: {
        flexDirection: 'row',
        marginBottom: 5, // Reducido de 15 a 5
    },
    searchButton: {
        backgroundColor: '#ff8fab',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
      },
      searchButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
      },

    // Contenedor de productos con menos espacio
    productsContainer: {
        paddingTop: 5, // Espacio reducido arriba
    },
});
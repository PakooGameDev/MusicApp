import { StyleSheet, Platform, StatusBar,TouchableOpacity,} from 'react-native';

export const styles = StyleSheet.create({

//---------------------------------Container----------------------------------------
container: {
  flex: 1,
  backgroundColor: '#212529',
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
},

//---------------------------------Validation----------------------------------------

ValidationContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',  
},

heading: {
  fontSize:30,
  fontWeight: 'bold',
  color: 'white',
  padding:5,
},

subHeading: {
  fontSize:18,
  fontWeight: 'bold', 
  color: '#a1a3a4',
  alignItems: 'center',
},

//---------------------------------Header----------------------------------------

header:{         
  height: 60,  
  flexDirection: 'row',
  alignItems:'flex-end',
  paddingBottom:5,
  marginBottom: 20,
},
headerItems:{
  color: 'rgba(255, 162, 0, 1)',
  paddingLeft: 25,
  fontSize: 23,
  fontWeight: '200',
  // textTransform: 'uppercase'
},

//---------------------------------Search----------------------------------------

searchSection: {
  width: '90%',
  alignSelf: 'center',
  height: 50,
  borderRadius:25,
  backgroundColor: '#2a2e32',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems:'center',
},

//---------------------------------Title----------------------------------------

title:{    
  width: '90%',
  alignSelf: 'center', 
  marginVertical: 25,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems:'center',
},
titleItems:{
  fontSize: 18,
  color: '#a1a3a4',
},   

//---------------------------------Song----------------------------------------

songItem: {
  height: 60,
  width: '90%',
  alignSelf: 'center', 
  marginBottom: 13,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems:'flex-start',  
},
songMeta:{
  flexDirection: 'row',
  width:'90%',
},
songLogo:{ 
  width: 60,
  height: 60,
  borderRadius: 60,  
},
songLogoRec: {
  width: 150,
  height: 180,
  resizeMode: 'stretch',
  borderRadius:20,
  marginBottom:10,
},
songTitle:{
  fontWeight: '300',
  fontSize: 16,
  color:'#d9dce2',
  width:'95%',
},
songAuthor:{
  fontWeight: '300',
  fontSize:13, 
  color:'#a1a3a4',
  width:'70%',
  marginLeft: 10,
},
songLong:{
  fontWeight: '300',
  fontSize:13, 
  color: '#a1a3a4',

},
songMenu:{
  fontWeight: '400',
  fontSize: 20,
  color:'#a1a3a4',
},     

//---------------------------------Current----------------------------------------

CurrentPlayer:{
  fontSize: 24,
  color:'rgba(255, 162, 0, 1)',
  paddingRight:10,

},

CurrentMusic:{
  height: 69,
  borderTopWidth: 3,
  borderColor:'rgba(255, 162, 0, 1)',
  backgroundColor: '#2a2e32',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems:'center',
  paddingHorizontal:20,
  zIndex:1,
},
CurrentInfo:{
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems:'center',
},
CurrentButtons:{
  flexDirection: 'row',
  alignItems:'center',
},
 
});

//---------------------------------Other styles----------------------------------------


  export const triggerStyles = {
    triggerWrapper: {
      paddingHorizontal: 10,
      paddingTop:4,
    },
     TriggerTouchableComponent: TouchableOpacity,
  };


  export const WelcomePage = StyleSheet.create({
    WelcomePage: {
      flex: 1,
      backgroundColor: '#212529',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    Container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:70
    },
    ViewBanner: {
      height:200,
      width:200,
      marginBottom:50,
      elevation:10,
      borderRadius:200,
      backgroundColor: '#2a2e32',
      justifyContent: 'center',
      alignItems: 'center',
    },
    ViewBannerIcon: { 
      color: 'rgba(255, 162, 0, 1)',
      fontSize:100, 
    },
    h1: {
      color:'#d9dce2',
      fontSize:28,
    },
    p: {
      textAlign:'center',
      marginTop: 10,
      marginHorizontal:25, 
      fontWeight: '300',
      fontSize:16,  
      color:'#a1a3a4',
    },
    loginText: {
      color:'rgba(255, 162, 0, 1)',
      fontWeight: '300',
      fontSize:22,
      marginVertical:50,
    },
    enterBtn: {
      height:70,
      width:70, 
      elevation:10, 
      borderRadius:70,
      backgroundColor:'rgba(255, 162, 0, 1)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    enterBtnIcon: {
      color:'#2a2e32',
      fontSize:25,
    }
  });


  export const AuthStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    borderLeft: {
      borderTopLeftRadius: 30,
      borderBottomLeftRadius: 30,
    },
    borderRight: {
      borderTopRightRadius: 30,
      borderBottomRightRadius: 30,
    },
  });

 export const optionsStyles = {
    optionsContainer: {
      elevation: 10,
      backgroundColor: '#212529',
      borderRadius:8,
    },
  };
  
  export const optionStyles = {
    optionTouchable: {
      underlayColor: 'gold',
      activeOpacity: 70,
    },
    optionWrapper: {
      marginBottom:3,
      
      padding: 15,
    },
    optionText: {
      color:'#fff'
    },
  };
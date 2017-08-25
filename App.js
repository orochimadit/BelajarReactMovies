import React from 'react';
import { StyleSheet, Text, View,
AppRegistry,ActivityIndicator,ListView ,TouchableHighlight} from 'react-native';


export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state={
			isLoading:true,
			clonedMovies:[]
		}
	}
	
	componentDidMount(){
		fetch('https://facebook.github.io/react-native/movies.json')
		.then((response) =>response.json())
		.then((responseJson)=>{
			var standardDataSource = new ListView.DataSource({rowHasChanged: (r1,r2)=> r1!==r2 });
	  
	this.setState({
	isLoading:false,
	 clonedMovies : standardDataSource.cloneWithRows(responseJson.movies)
	});
		})
	}
	
	/*pressCell(rowData){
	  Alert.alert(rowData);
  }*/
  render() {
	  console.log("getting data")
	  if(this.state.isLoading){
		  return(<View>
			<ActivityIndicator/>
		  </View>);
	  }
	  console.log("Already get datta")
    return (
      <View style={{flex:1 ,paddingTop:25}}>
        <ListView
			dataSource={this.state.clonedMovies}
			renderRow={
				//s<TouchableHighlight>
				(rowData)=> <Text>title : {rowData.title},release date : {rowData.releaseYear}</Text>
			//</TouchableHighlight>
			}
		/>
		
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

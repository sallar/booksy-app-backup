import React from 'react';
import { Text, View, ScrollView, RefreshControl, FlatList, ActivityIndicator } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { globalStyles } from '../../styles/global';
import { listShelfs } from '../../graphql/queries';
import { ListShelfsQuery } from '../../API';
import { useQuery } from '../../hooks/query';
import { HeaderButtons, Item } from '../HeaderButtons';

export const LibraryScreen: NavigationStackScreenComponent = () => {
  const { data, refetch, refetching } = useQuery<ListShelfsQuery>(listShelfs);

  if (!data) {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refetching} onRefresh={refetch} />}>
      <FlatList
        keyExtractor={item => item.key}
        data={data.listShelfs.items}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

LibraryScreen.navigationOptions = () => ({
  title: 'Book Shelves',
  headerRight: () => (
    <HeaderButtons>
      <Item title="Add" iconName="add" onPress={() => console.warn('add')} />
    </HeaderButtons>
  ),
});

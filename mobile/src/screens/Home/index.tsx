import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, FlatList, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { GameCard, GameCardProps } from '../../components/GameCard'
import { Background } from '../../components/Background'
import { Heading } from '../../components/Heading'

import logoImg from '../../assets/logo-nlw-esports.png'

import { styles } from './styles'

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])

  const navigation = useNavigation()

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl })
  }

  useEffect(() => {
    fetch('http://192.168.15.5:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.wrapperScroll}
          showsVerticalScrollIndicator={false}
        >
          <Image
            style={styles.logo}
            source={logoImg}
          />

          <Heading
            title="Encontre seu duo!"
            subtitle="Selecione o game que deseja jogar..."
          />

          <FlatList
            data={games}
            horizontal
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentList}
            renderItem={({ item }) => (
              <GameCard
                key={item.id}
                data={item}
                onPress={() => handleOpenGame(item)}
              />
            )}
          />
        </ScrollView>
      </SafeAreaView>
    </Background>
  )
}
import { Home } from '../templates/Home'
import axios from 'axios'
import { api } from '../helpers/api'
import { GetStaticProps } from 'next'
import { HomeProps } from '../templates/Home'

export default function Index({ data = null }: HomeProps) {
    return <Home data={data} />
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const maxPokemons = 400
    const res = await axios.get(`${api}/?limit=${maxPokemons}`)
    let data
    if (res) {
        //add pokemon index
        data = res.data.results
        data.forEach((item, index) => {
            item.id = index + 1
        })
    } else {
        data = null
    }
    return {
        props: {
            data,
        },
    }
}

import React, {Component} from 'react'
import Img from 'react-image'
import {Link} from 'react-router-dom'

import './itemListComponent.sass'
import Spinner from '../spinner'
import ErrorMessage from '../errorMessage'


export default class ItemListComponent extends Component {

    state = {
        itemList: null,
        selectedItem: null,
        loading: true,
        error: false
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    componentDidMount() {
        this.setState({loading: true})
        const {getData} = this.props
        getData()
            .then((itemList) => {
                this.setState({
                    itemList,
                    loading: false
                })
            })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    searchItem = (itemList, term) => {
        if(!term || term.length === 0) {
            return itemList
        }
        return itemList.filter((item) => {
            return item.name.toLowerCase().indexOf(term) > -1
        })
    }

    filterItems = (itemList, filter) => {
        if(!filter || filter.length === 0) {
            return itemList
        }
        return itemList.filter((item) => {
            return item.country === filter
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {name, url, price} = item
            const {classes} = this.props
            const id = name
            const country = this.props.renderItem(item)
            let urlPath = ''
            if(this.props.details) {
                urlPath = `/details/${id}`
            } else {
                urlPath = '#'
            }
            return (
                <li
                    key={id}
                    className={classes[0]}
                    onClick={() => this.onItemSelected(id)}>
                    <Link to={urlPath}>
                        <Img src={url} alt="coffee"></Img>
                        <div className={classes[1]}>{name}</div>
                        <div className="shop__item-country">{country}</div>
                        <div className={classes[2]}>{price}</div>
                    </Link>
                </li>
            )
        })
    }

    render ()  {
        const {itemList, loading, error} = this.state
        const {filter, term, classes} = this.props

        const filteredItems = this.filterItems(itemList, filter)
        const visiblePosts = this.searchItem(filteredItems, term)

        const errorMessage = error ? <ErrorMessage/> : null
        const spinner = loading ? <Spinner/> : null
        const content = !(loading || error) ? this.renderItems(visiblePosts) : null

        return (
                    <ul className={classes[3]}>
                        {errorMessage}
                        {spinner}
                        {content}
                    </ul>
        )
    }
}


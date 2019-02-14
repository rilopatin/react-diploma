import React, {Component} from 'react'

export default class FilterComponent extends Component {

    updateSearch = (e) => {
       const term = e.target.value.toLowerCase()
       this.props.onUpdateSearch(term)
    }

    setFilter = (e) => {
        const filter = e.target.innerHTML
        this.props.onFilter(filter)
    }

    render () {
        return (
            <div className="row">
                <div className="col-lg-4 offset-2">
                    <form action="#" className="shop__search">
                        <label className="shop__search-label" htmlFor="filter">Looking for</label>
                        <input
                            id="filter" type="text"
                            placeholder="start typing here..."
                            className="shop__search-input"
                            onChange={this.updateSearch}>
                        </input>
                    </form>
                </div>
                <div className="col-lg-4">
                    <div className="shop__filter">
                        <div className="shop__filter-label">
                            Or filter
                        </div>
                        <div className="shop__filter-group">
                            <button
                                className="shop__filter-btn"
                                onClick={this.setFilter}>
                                Brazil
                            </button>
                            <button
                                className="shop__filter-btn"
                                onClick={this.setFilter}>
                                Kenya
                            </button>
                            <button
                                className="shop__filter-btn"
                                onClick={this.setFilter}>
                                Columbia
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

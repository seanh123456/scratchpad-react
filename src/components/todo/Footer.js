import React from 'react'
import FilterButton from '../../containers/FilterLink'
import { VisibilityFilters } from '../../actions/list'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterButton filter={VisibilityFilters.SHOW_ALL}>All</FilterButton>
    <FilterButton filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterButton>
    <FilterButton filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterButton>
  </div>
)

export default Footer

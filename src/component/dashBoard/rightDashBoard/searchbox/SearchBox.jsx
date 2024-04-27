import React, { useEffect, useState } from 'react';
import './SearchBox.css';
import { IoSearch } from "react-icons/io5";
import { useSelector } from 'react-redux';
import SearchUsr from '../../../model/SearchUsr';
import { RiCloseLine } from "react-icons/ri";

export default function SearchBox({name,handleNameOnChange}) {
    const mode=useSelector(state=>state.theme)

    
    return (
        <>
            <div id='searchBox'>
                <input  className={mode.dark?"darkMode-rightDashboardSearchColor":""}  type='search' name="search" id='searchInput' onChange={handleNameOnChange} placeholder='Search User' value={name} />
                <span type="button"id='searchIcon'><IoSearch size={20} /></span>
            </div>
            <hr id='hrSearchStyle' />
            
        </>
    )
}

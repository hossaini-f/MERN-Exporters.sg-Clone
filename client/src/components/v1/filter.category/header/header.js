import React from 'react';
import {Link} from 'react-router-dom';
import './statics/style.css';

const Header = (props) => {
    return(
        <div class="filter-category-header">
            <div class="filter-category-container">
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td width="23%" valign="top" align="left">
                                <div id="filter-category-title-c">
                                    <span><Link to="/browse-categories">All Categories</Link></span><br/>
                                    <b>{props.category}</b>
                                </div>
                            </td>
                            <td width="77%" valign="top" align="left">
                                
                                    <ul class="category-li">
                                        <li><Link to={{pathname:"/category/products", search:"?type="+props.title+"&_c=Sex Hormones (Female)"}}>Sex Hormones (Female)</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+props.title+"&_c=Sex Hormones (Male)"}}>Sex Hormones (Male)</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+props.title+"&_c=Sleeping Drugs"}}>Sleeping Drugs</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+props.title+"&_c=Tranquilizer"}}>Tranquilizer</Link></li>
                                    </ul>
                                    <ul >
                                        <li><Link to={{pathname:"/category/products", search:"?type="+props.title+"&_c=Analgesics"}}>Analgesics</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+props.title+"&_c=Vitamins"}}>Vitamins</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+props.title+"&_c=Medical machines"}}>Medical machines &amp; equipment’s </Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+props.title+"&_c=Cosmetics"}}>Cosmetics</Link></li>
                                    </ul>
                                    <ul >
                                        <li><Link to={{pathname:"/category/products", search:"?type="+props.title+"&_c=Anticonvulsants"}}>Anticonvulsants</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+props.title+"&_c=Antidepressants"}}>Antidepressants</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+props.title+"&_c=Antidiarrheals"}}>Antidiarrheals</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+props.title+"&_c=Antihypertensives"}}>Antihypertensives</Link></li>
                                    </ul>
                                    <ul >
                                        <li><Link to={{pathname:"/category/products", search:"?type="+props.title+"&_c=Antipyretics"}}>Antipyretics</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+props.title+"&_c=Antivirals"}}>Antivirals</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+props.title+"&_c=Barbiturates"}}>Barbiturates</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+props.title+"&_c=Beta-Blockers"}}>Beta-Blockers</Link></li>
                                    </ul>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Header;
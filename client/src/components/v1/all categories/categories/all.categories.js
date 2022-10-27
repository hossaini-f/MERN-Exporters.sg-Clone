import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import SideBar from '../sidebar/sidebar';
import './statics/style.css';
import Icon from './statics/images/logoBW.png';
import ArrowRight from './statics/images/arrow_right.png';

const AllCategories = () => {
    const [isChecked1, setIsChecked1] = useState(true);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [title, setTitle] = useState('products');
    const isSelected1 = (e) => {
        e.preventDefault();
            setTitle('products');
            setIsChecked1(true);
            setIsChecked2(false);
            setIsChecked3(false);
    }
    const isSelected2 = (e) => {
        e.preventDefault();
            setTitle('members');
            setIsChecked2(true);
            setIsChecked1(false);
            setIsChecked3(false);
    }
    const isSelected3 = (e) => {
        e.preventDefault();
            setTitle('buying leads');
            setIsChecked3(true);
            setIsChecked1(false);
            setIsChecked2(false);
    }
    return (
        <div class="browse-category-container">
            <div class="bc-title">
                Browse <b>{title}</b> by category 
            </div>
            <div class="bc-tabs">
                <input type="radio" class="link-checked" id="products" name="bc_group" value='1' checked={isChecked1}/>
                <label for="products"><a onClick={isSelected1}>Products</a></label>
                <input type="radio" class="link-checked" id="members" name="bc_group" value='2'  checked={isChecked2}/>
                <label for="members"><a onClick={isSelected2}>Members</a></label>
                <input type="radio" class="link-checked" id="buyingleads" name="bc_group" value='3'  checked={isChecked3}/>
                <label for="buyingleads"><a onClick={isSelected3}>Buying Leads</a></label>
            </div>
            <div class="bc-wrapper">
                <div class="bc-left-sidebar">
                     <table class="bc-main-table" width="100%" height="45px" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td>
                                    <a href="" onClick={(e) => e.preventDefault()}>
                                        <table class="bc-table-header">
                                            <tbody>
                                                <tr>
                                                    <td width="50px"><div class="bc-icon" style={{backgroundImage: "url("+ Icon +")"}}></div></td>
                                                    <td><span class="bc-table-title">Medicine Categories</span></td>
                                                    <td width="32px"><div class="bc-icon-arrow" style={{backgroundImage: "url("+ ArrowRight +")"}}></div></td>
                                                </tr>
                                            </tbody>
                                        </table>  
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="bc-ul-links" valign="top">
                                    <ul class="category-li">
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Analgesics"}}>Analgesics</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Antacids"}}>Antacids</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Antianxiety Drugs"}}>Antianxiety Drugs</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Antiarrhythmics"}}>Antiarrhythmics</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Antibacterials"}}>Antibacterials</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Antibiotics"}}>Antibiotics</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Anticoagulants"}}>Anticoagulants and  Thrombolytics</Link></li>
                                    </ul>
                                    <ul class="category-li">
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Anticonvulsants"}}>Anticonvulsants</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Antidepressants"}}>Antidepressants</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Antidiarrheals"}}>Antidiarrheals</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Antiemetics"}}>Antiemetics</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Antifungals"}}>Antifungals</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Antihistamines"}}>Antihistamines</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Antihypertensives"}}>Antihypertensives</Link></li>
                                    </ul>
                                    <ul class="category-li">
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Anti-Inflammatories"}}>Anti-Inflammatories</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Antineoplastics"}}>Antineoplastics</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Antipsychotics"}}>Antipsychotics</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Antipyretics"}}>Antipyretics</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Antivirals"}}>Antivirals</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Barbiturates"}}>Barbiturates</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Beta-Blockers"}}>Beta-Blockers</Link></li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                     <table class="bc-main-table" width="100%" height="45px" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td>
                                    <a href="" onClick={(e) => e.preventDefault()}>
                                        <table class="bc-table-header">
                                            <tbody>
                                                <tr>
                                                    <td width="50px"><div class="bc-icon" style={{backgroundImage: "url("+ Icon +")"}}></div></td>
                                                    <td><span class="bc-table-title">Medicine Categories</span></td>
                                                    <td width="32px"><div class="bc-icon-arrow" style={{backgroundImage: "url("+ ArrowRight +")"}}></div></td>
                                                </tr>
                                            </tbody>
                                        </table>  
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="bc-ul-links" valign="top">
                                    <ul class="category-li">
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Bronchodilators"}}>Bronchodilators</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Cold Cures"}}>Cold Cures</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Corticosteroids"}}>Corticosteroids</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Cough Suppressants"}}>Cough Suppressants</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Cytotoxics"}}>Cytotoxics</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Diuretics"}}>Diuretics</Link></li>
                                    </ul>
                                    <ul class="category-li">
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Expectorant"}}>Expectorant</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Hormones"}}>Hormones</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Hypoglycemics (Oral)"}}>Hypoglycemics (Oral)</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Immunosuppressives"}}>Immunosuppressives</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Laxatives"}}>Laxatives</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Muscle Relaxants"}}>Muscle Relaxants</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Sedatives"}}>Sedatives</Link></li>
                                    </ul>
                                    <ul class="category-li">
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Sex Hormones (Female)"}}>Sex Hormones (Female)</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Sex Hormones (Male)"}}>Sex Hormones (Male)</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Sleeping Drugs"}}>Sleeping Drugs</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Tranquilizer"}}>Tranquilizer</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Vitamins"}}>Vitamins</Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Medical machines"}}>Medical machines &amp; equipment’s </Link></li>
                                        <li><Link to={{pathname:"/category/products", search:"?type="+title+"&_c=Cosmetics"}}>Cosmetics</Link></li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                {/* Sidebar */}
                    <SideBar />
                {/* Sidebar */}
                
            </div>
        </div>
    )
}
export default AllCategories;
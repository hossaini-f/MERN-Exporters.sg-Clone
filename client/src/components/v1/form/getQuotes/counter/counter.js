import React from 'react'
import './style.css';


const ProductCounter = () =>{
    return (
        
            <div class="CATCOUNTERROUND_OUTER">
                <div id="catcounterround_loader_sellers"></div>
                <div class="CATCOUNTERROUND_BORDER">
                    <table class="CATCOUNTERROUND_INNERBORDER" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td valign="middle" align="center">
                                    <div id="catcounterround_num_sellers" class="CATCOUNTERROUND_NUM" align="center">60</div>
                                    <div class="CATCOUNTERROUND_TEXT">Active <span><br/><b>Sellers</b></span></div>       
                                </td>
                            </tr>    
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default ProductCounter;
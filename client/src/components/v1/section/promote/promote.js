import React from 'react';
import './statics/style.css';
import Sell from './statics/images/sell.jpg';
import Buy from './statics/images/buy.jpg';
import TradeSafe from './statics/images/tradesafe.jpg';

const Promote = () => {
    return (
    <div class="promote-wrapper" align="center">
        <div class="promote-container">
    
          <table class="promote-table-heading" cellspacing="0" cellpadding="0" border="0">
            <tbody>
              <tr>
                <td align="center">
                      <span class="promote-heading">Global Business-to-business (B2B) marketplace</span><br />
                      <span class="pro-headin-desc">
                          Medicinesworld.com is a global business-to-business (B2B) marketplace with over 600 product
                         categories. Using <a class="promote-link" href="" target="_blank">Trust Points®</a>, 
                        we help you find better trading partners. 
                        Take a <a class="promote-link" href="" target="_blank">site tour</a>.
                      </span>
                </td>
              </tr>
            </tbody>
          </table>
    
          <table class="promote-hide" cellspacing="0" cellpadding="10" border="0" align="center">
            <tbody>
              <tr>
                <td width="33%" align="center">
                  <a href="" target="_blank" style={{textDecoration: 'none'}}>
                    <div class="promote-image">
                      <img src={Buy} width="150px" height="150px" border="0" />
                    </div>
                  </a><br />
                  <span class="promo-title">Buy</span><br/>
                  <span class="promo-desc">
                    Over <a class="promote-link" href="" target="_blank">600 categories</a> for you to choose from.
                  </span>
                </td>
    
                <td width="33%" align="center">
                  <a href="" target="_blank" style={{textDecoration: 'none'}}>
                    <div class="promote-image">
                      <img src={Sell} width="150px" height="150px" border="0" />
                    </div>
                  </a><br />
                  <span class="promo-title">Sell</span><br />
                  <span class="promo-desc"><a class="promote-link" href="" target="_blank">
                    Start selling</a> to thousands of buyers worldwide.
                  </span>
                </td>
    
                <td width="33%" align="center">
                  <a href="" target="_blank" style={{textDecoration: 'none'}}>
                    <div class="promote-image">
                      <img src={TradeSafe} width="150px" height="150px" border="0" />
                    </div>
                  </a><br />
                  <span class="promo-title">Trade Safely</span><br />
                  <span class="promo-desc">
                    Find out how we create a <a class="promote-link" href="" target="_blank">safer 
                    trading</a> marketplace.
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
    
          <table class="promote-mobile-show" style={{padding: '0px 10px 0px 10px'}} width="100%" cellspacing="0" cellpadding="20" border="0">
            <tbody>
              <tr>
                <td style={{paddingRight:'0px'}} width="100px">
                  <a href="" target="_blank" style={{textDecoration: 'none'}}>
                    <div class="promote-image" style={{width: '100px'}}>
                      <img src={Buy} width="100px" border="0" />
                    </div>
                  </a> 
                </td>
                <td>
                  <span class="promo-title">Buy</span><br/>
                  <span class="promo-desc">
                      Over <a class="promote-link" href="" target="_blank">600 categories</a> for you to choose from.
                  </span>
                </td>
              </tr>
              <tr>
                <td style={{paddingRight:'0px'}} width="100px">
                  <a href="" target="_blank" style={{textDecoration: 'none'}}>
                  <div class="promote-image" style={{width: '100px'}}>
                    <img src={Sell} width="100px" />
                    </div>
                  </a>
                </td>
                <td>
                  <span class="promo-title">Sell</span><br />
                  <span class="promo-desc">
                      <a class="promote-link" href="" target="_blank">Start selling</a> to thousands of buyers worldwide.
                  </span> 
                </td>
              </tr>
              <tr>
                <td style={{paddingRight:'0px'}} width="100px">
                  <a href="" target="_blank" style={{textDecoration: 'none'}}>
                    <div class="promote-image" style={{width: '100px'}}>
                      <img src={TradeSafe} width="100px" />
                    </div>
                  </a>
                </td>
                <td>
                  <span class="promo-title">Trade Safely</span><br/>
                  <span class="promo-desc">Find out how we create a <a class="promote-link" href="" target="_blank">
                    safer trading</a> marketplace.
                  </span> 
                </td>
              </tr>
            </tbody>
          </table>
      
        </div>
      </div>
    )
}

export default Promote;
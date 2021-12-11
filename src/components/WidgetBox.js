import React from "react";
import vector from '../images/public-profile.svg';
import carbonVector from '../images/carbon.svg';
import greensparkText from '../images/greenspark-text.svg';
import carbonGreensparkText from '../images/carbon-greenspark-text.svg';
import { MdInfoOutline } from 'react-icons/md';
import ReactTooltip from 'react-tooltip';

export default function WidgetBox(props) {
    return (
        <>
            {
                props.products.map((product) => {
                    return (
                        <div className='widget-box' key={product.id}>
                            <div className={product.headerClass}>
                                <div className='widget-header-details'>
                                    <div className='widget-img-container'>
                                        <img src={product.type === 'carbon' ? carbonVector : vector} className='vector' />
                                        <img src={product.type === 'carbon' ? carbonGreensparkText : greensparkText} className='greenspark-text' />
                                    </div>

                                    <div className='widget-header-text-container'>
                                        <p className={product.headerTextOneClass}>{product.headerTextOne}</p>
                                        <p className={product.headerTextTwoClass}>{product.headerTextTwo}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='widget-body'>
                                <div className='widget-body-details'>
                                    <p className='widget-body-text link-to-public-profile'> Link to Public Profile</p>
                                    <div className='info-icon-container'> <a data-for='info' data-tip><MdInfoOutline className='info-icon' /></a></div>
                                    <ReactTooltip
                                        id='info'
                                        effect='solid'
                                        delayHide={300}
                                        delayShow={300}
                                        delayUpdate={300}
                                        place={'left'}
                                        className='info-tool-tip-container'
                                    >

                                        <p>This widget links directly to your public profile so that you can easily share your impact with your customers.
                                            Turn it off here if you do not want the badge to link to it.
                                        </p>
                                        <a href='/'>View Public Profile</a>

                                    </ReactTooltip>
                                    <div className='check-box-container'>
                                        <input type="checkbox" id={product.checkboxId} />
                                        <label for={product.checkboxId}></label>
                                        <div className='check-box-overlay'></div>
                                    </div>
                                </div>
                                <div className='widget-body-details'>
                                    <p className='widget-body-text badge-colour'>Badge colour</p>
                                    <div className='badge-colour-box-container'>
                                        {
                                            product.badgeColours.map((badgeColour) => {
                                                return (
                                                    <label key={badgeColour.id} className={badgeColour.labelClass} for={badgeColour.checkboxId}>
                                                        <input type="checkbox" id={badgeColour.checkboxId} />
                                                        <div className={badgeColour.fillClass}></div>
                                                    </label>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                                <div className='widget-body-details'>
                                    <p className='widget-body-text activate-bage'>Activate badge</p>
                                    <label className='toggle' for={product.activateBadgeCheckboxId}>
                                        <input className='badge-toggle-input' type='checkbox' id={product.activateBadgeCheckboxId} />
                                        <div className='badge-toggle-fill'></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )

}
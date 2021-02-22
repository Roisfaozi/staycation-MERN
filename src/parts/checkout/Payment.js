import React from 'react'
import Fade from 'react-reveal/Fade'
import { InputText, InputFile } from "elements/Form";

import logoBca from 'assets/images/img/logo-bca.jpg'
import logoBMandiri from 'assets/images/img/logo-mandiri.jpg'


export default function Payment(props) {

    const { data, ItemDetails, checkout } = props

    const tax = 10
    const subTotal = ItemDetails.price * checkout.duration
    const grandTotal = (subTotal + tax) / 100 + subTotal

    return (
        <Fade>
            <div className="container" style={{ marginBottom: 30 }}>
                <div className="row justify-content-center align-items-center">
                    <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
                        <Fade delay={300}>
                            <p className="mb-4">Transfer Pmebayaran:</p>
                            <p>Tax: {tax}%</p>
                            <p>Sub total: ${subTotal} USD</p>
                            <p>Total: ${grandTotal} USD</p>
                            <div className="row mt-4">
                                <div className="col-3 text-right">
                                    <img src={logoBca} alt="Bank Central Asia" width='60' />
                                </div>
                                <div className="col">
                                    <dl>
                                        <dd>Bank BCA</dd>
                                        <dd>2208 1996</dd>
                                        <dd>Build With Angga</dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 text-right">
                                    <img src={logoBMandiri} alt="Bank Mandiri" width='60' />
                                </div>
                                <div className="col">
                                    <dl>
                                        <dd>Bank Mandiri</dd>
                                        <dd>2208 1996</dd>
                                        <dd>Build With Angga</dd>
                                    </dl>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
                        <Fade delay={600}>
                            <label htmlFor="proofPayment">Upload Bukti Transfer</label>
                            <InputFile
                                accept="image/*"
                                id='proofPayment'
                                name='proofPayment'
                                value={data.proofPayment}
                                onChange={props.onChange}
                            />
                        </Fade>
                        <Fade delay={600}>
                            <label htmlFor="bankName">Asal Bank</label>
                            <InputText
                                type="text"
                                id='bankName'
                                name='bankName'
                                value={data.bankName}
                                onChange={props.onChange}
                            />
                        </Fade>
                        <Fade delay={600}>
                            <label htmlFor="bankHolder">Nama Pengirim</label>
                            <InputText
                                type="text"
                                id='bankHolder'
                                name='bankHolder'
                                value={data.bankHolder}
                                onChange={props.onChange}
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

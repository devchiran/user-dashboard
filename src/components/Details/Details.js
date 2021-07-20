import React from 'react'
import './Details.css'

function Details(props) {
    const { username, email, phone, website, address, company } = props.data;
    return (
        <div className="row">
            <div className="col-12 col-xl-4">
                <div className="user-details__card h-100 pt-3 p-xl-3" data-testid="contact">
                    <h1 className="card-title h5" data-testid="contact__title"><strong>Contact Info</strong></h1>
                    <p className="card-text m-0"  data-testid="contact__username">Username: {username}</p>
                    <p className="card-text m-0" data-testid="contact__email">
                        Email:
                        <a href={`mailto:${email}`} className="text-decoration-none text-info"> {email}</a>
                    </p>
                    <p className="card-text m-0" data-testid="contact__phone">
                        Phone:
                        <a href={`tel:${phone}`} className="text-decoration-none text-info"> {phone}</a>
                    </p>
                    <p className="card-text" data-testid="contact__website">
                        Website:
                        <a href={website} className="text-decoration-none text-info" target="_blank" rel="noreferrer" > {website}</a>
                    </p>
                </div>
            </div>
            <div className="col-12 col-xl-4">
                <div className="user-details__card h-100 pt-5 p-xl-3">
                    <h1 className="card-title h5" data-testid="address__title"><strong>Address</strong></h1>
                    <p className="card-text m-0" data-testid="address__details">{address.suite} {address.street}, {address.city}, {address.zipcode}</p>
                </div>
            </div>
            <div className="col-12 col-xl-4">
                <div className="user-details__card h-100 pt-5 p-xl-3">
                    <h1 className="card-title h5" data-testid="company__title"><strong>Company</strong></h1>
                    <p className="card-text m-0" data-testid="company__name">{company.name}</p>
                    <p className="card-text m-0" data-testid="company__bs">{company.bs}</p>
                    <p className="card-text m-0" data-testid="company__phrase"><em>"{company.catchPhrase}"</em></p>
                </div>
            </div>
        </div>
    )
}

export default Details;
import React from 'react'
import Header from './Header'
import "./Contact.css"
import ContactForm from './ContactForm'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
    <Header/>
    <div className="content-block ">
        <div
          className="container-fluid container-page-item-title with-bg aos-init aos-animate"
          data-style="background-image: url(http://wp.magnium-themes.com/saxon/saxon-1/wp-content/uploads/2018/10/saxon-00031-1.jpg);"
          data-aos="fade-up"
          style={{
            backgroundImage:
              "url(http://wp.magnium-themes.com/saxon/saxon-1/wp-content/uploads/2018/10/saxon-00031-1.jpg)",
          }}
        >
          <div className="row">
            <div className="col-overlay">
              <div className="page-item-title-single page-item-title-page">
                <h1 className="page-title">Contact us</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="page-container container">
          <div className="row">
            <div className="col-md-12">
              <div className="entry-content ">
                <article>
                  <div className="block-columns ">
                    <div className="block-column ">
                      <h2 className="block-heading">
                      Tips
                      </h2>

                      <p>
                      Have a news tip or inside information about a topic we covered? Drop us a note at info@dynamotechtrends.com Please don’t use this email address to submit information about your company.
                      </p>
                    </div>

                    <div className="block-column ">
                      <h2 className="block-heading">Advertise </h2>

                      <p>
                      For advertising inquiries, please contact us directly at info@dynamotechtrends.com both large or unique campaigns and requests-for-proposal and additional pricing information.
                      </p>
                    </div>
                  </div>

                  <div className="block-columns  wp-container-6 ">
                    <div className="block-column ">
                      <p>
                      We respect anonymity; if you prefer to remain anonymous, you can use the form below instead.
                      </p>
                    </div>

                    <div className="block-column ">
                      <p>
                      If you would also like to partner with DynamoTechTrends at our next event, contact us at info@dynamotechtrends.com.                      </p>
                    </div>
                  </div>
                  <hr className="block-separator" />
                  <h1 className="block-heading">How can we help you</h1>
                  <div className="block-columns  wp-container-6 ">
                    <div className="block-column-p ">
                      <p>
                      If you would like your company listed on DynamoTechTrends, please use our form to contact us.
                      </p>
                    </div>
                    <div>
                        <ContactForm/>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact

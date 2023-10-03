import React from "react";
import "./BlogPost.css"; // Import your CSS styles

const BlogPost = () => {
  return (
    <div className="content-block">
      <div className="container-fluid container-page-item-title">
        <div className="row">
          <div className="col-md-12 col-overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-item-title-single">
                    <div className="saxon-post-single">
                      <div className="post-categories">
                        <a href="https://dynamotechtrends.com/category/smart-technology/">
                          Smart technology
                        </a>
                      </div>
                      <div className="saxon-post-details">
                        <h1 className="post-title">
                          Sustainability in the Digital Age: Redefining Architecture and Construction
                        </h1>
                        <div className="post-date">October 2, 2023</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="post-container container span-col-md-12 post-single-content">
        <div className="row">
          <div className="col-md-12 post-single-content">
            <div className="blog-post blog-post-single clearfix">
              <article
                id="post-1851"
                className="post-1851 post type-post status-publish format-standard has-post-thumbnail hentry category-smart-technology tag-artifical-intelligency tag-renewable-energy tag-smart-technology"
                role="main"
              >
                <div className="post-content-wrapper">
                  <div className="post-content clearfix">
                    <div className="blog-post-thumb">
                      <img
                        width="560"
                        height="240"
                        src="https://dynamotechtrends.com/wp-content/uploads/2023/10/BIm.jpg"
                        className="attachment-saxon-blog-thumb size-saxon-blog-thumb wp-post-image"
                        alt=""
                      />
                    </div>
                    {/* Rest of the content */}
                  </div>
                </div>
              </article>
              <div className="saxon-post saxon-post-bottom">
                <div className="post-details-bottom">
                  <div className="post-info-tags">
                    <div className="tags clearfix">
                      <a href="https://dynamotechtrends.com/tag/artifical-intelligency/" rel="tag">
                        Artifical intelligency
                      </a>{" "}
                      <a href="https://dynamotechtrends.com/tag/renewable-energy/" rel="tag">
                        renewable energy
                      </a>{" "}
                      <a href="https://dynamotechtrends.com/tag/smart-technology/" rel="tag">
                        smart technology
                      </a>
                    </div>
                  </div>
                  <div className="post-info-wrapper">
                    <div className="post-info-comments">
                      <i className="fa fa-comment-o" aria-hidden="true"></i>
                      <a href="https://dynamotechtrends.com/sustainability-in-the-digital-age-redefining-architecture-and-construction/?noamp=mobile#respond">
                        0
                      </a>
                    </div>
                    <div className="post-info-views">
                      <i className="fa fa-eye" aria-hidden="true"></i>5
                    </div>
                  </div>
                  {/* Rest of the post info */}
                </div>
                <div className="post-info-share">
                  <div className="post-social-wrapper">
                    <div className="post-social-title">Share:</div>
                    <div className="post-social">
                      {/* Add social sharing links */}
                    </div>
                    <div className="clear"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add navigation below if needed */}
      <div className="clear"></div>
      <div className="comments-form-wrapper" id="comments-form-wrapper">
        {/* Add comments form */}
      </div>
    </div>
  );
};

export default BlogPost;

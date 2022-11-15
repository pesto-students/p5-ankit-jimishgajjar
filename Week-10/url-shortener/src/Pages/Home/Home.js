import React, { useState } from "react";

import "./styles.css";
import icon from "../../assets/download.svg";
import copy from "copy-text-to-clipboard";

function Home() {
  const [urlInput, setUrlInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [urlValidate, setUrlValidate] = useState(false);
  const [shortedUrls, setShortedUrls] = useState({
    code: "",
    short_link: "",
    full_short_link: "",
    short_link2: "",
    full_short_link2: "",
    short_link3: "",
    full_short_link3: "",
    share_link: "",
    full_share_link: "",
    original_link: "",
  });

  const { urlCopied, setUrlCopy } = useState(false);

  const urlChange = (evt) => {
    setUrlInput(evt.target.value);

    var expression =
      /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (urlInput.match(regex)) {
      setUrlValidate(true);
    } else {
      setUrlValidate(false);
    }

    // let validateLabel;
    // if (urlValidate === true) {
    //   validateLabel = (
    //     <label className="input-label-valid">Enter url is valid.</label>
    //   );
    // }
    // if (urlValidate === false) {
    //   validateLabel = (
    //     <label className="input-label-invalid">Enter url is invalid.</label>
    //   );
    // }
  };

  const genrateShortUrl = async () => {
    if (urlValidate) {
      try {
        setLoading(true);
        let urlData = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${urlInput}`
        );
        const response = await urlData.json();
        if (response.ok === true) {
          setShortedUrls({
            code: response.result.code,
            short_link: response.result.short_link,
            full_short_link: response.result.full_short_link,
            short_link2: response.result.short_link2,
            full_short_link2: response.result.full_short_link2,
            short_link3: response.result.short_link3,
            full_short_link3: response.result.full_short_link3,
            share_link: response.result.share_link,
            full_share_link: response.result.full_share_link,
            original_link: response.result.original_link,
          });
          setLoading(false);
          setUrlInput("");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  function copyUrl() {
    copy(shortedUrls.short_link);
    setUrlCopy(false);
  }

  return (
    <>
      <div className="home-content">
        <div>
          <h1>More then just shorten link</h1>
          <p>
            Buld your brand's recognition and get detailed inshight on how your
            links are performing
          </p>
        </div>
        <div>
          <img src={icon} alt="icon" />
        </div>
      </div>
      <div className="short-link">
        <div className="input-box">
          <input
            type="text"
            className="input"
            placeholder="Enter Url To Shorten"
            onChange={urlChange}
            value={urlInput}
          />
        </div>
        <button onClick={genrateShortUrl} disabled={urlValidate === false}>
          {loading ? (
            <>
              <i
                className="fa fa-refresh fa-spin"
                style={{ marginRight: "5px" }}
              />
              <span>Genrating</span>
            </>
          ) : (
            <span>Genrate</span>
          )}
        </button>
      </div>

      <div className="shorten">
        <div className="item">
          {!shortedUrls.short_link ? (
            <>
              <div className="shorted-link-blank">
                <h3>
                  {loading ? (
                    <i
                      className="fa fa-refresh fa-spin"
                      style={{ marginRight: "5px" }}
                    />
                  ) : (
                    <span>Enter Url To Short</span>
                  )}
                </h3>
              </div>
            </>
          ) : (
            <>
              <div className="shorted-link">
                <h4>{shortedUrls.original_link}</h4>
                <h4>{shortedUrls.short_link}</h4>
                <button onClick={copyUrl}>
                  {urlCopied ? "Copied !" : "Copy"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;

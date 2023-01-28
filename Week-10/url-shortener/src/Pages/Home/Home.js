import React, { useState, useEffect } from "react";

import "./styles.css";
import icon from "../../assets/icon.svg";
import InputComponent from "../../components/InputComponent";
import ShortedUrl from "../../components/ShortedUrl";
import copy from "copy-text-to-clipboard";

function Home() {
  const [urlInput, setUrlInput] = useState({
    inputUrl: "",
    urlValidate: false,
    response: null,
    loading: false,
    urlCopy: false
  });

  const inputOnChange = (e) => {
    urlInput.inputUrl = e.target.value;
    setUrlInput({ ...urlInput });

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (urlInput.inputUrl !== "" && urlInput.inputUrl.match(regex)) {
      urlInput.urlValidate = true;
      setUrlInput({ ...urlInput });
    } else {
      urlInput.urlValidate = false;
      setUrlInput({ ...urlInput });
    }
  };

  const genrateShortUrl = async () => {
    if (urlInput.urlValidate) {
      try {
        urlInput.loading = true;
        setUrlInput({ ...urlInput });
        let urlData = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${urlInput.inputUrl}`
        );
        const response = await urlData.json();
        if (response.ok === true) {
          setUrlInput({
            response: response.result,
            loading: false,
            inputUrl: "",
            urlValidate: false
          });
        } else {
          urlInput.loading = false;
          setUrlInput({ ...urlInput });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  function copyUrl() {
    copy(urlInput.response.short_link);
    urlInput.urlCopy = true;
    setUrlInput({ ...urlInput });

    setInterval(() => {
      urlInput.urlCopy = false;
      setUrlInput({ ...urlInput });
    }, 5000);
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
          <InputComponent
            inputChange={inputOnChange}
            inputValue={urlInput.inputUrl}
            inputValidte={urlInput.urlValidate}
          />
        </div>
        <button
          className="btn"
          onClick={genrateShortUrl}
          disabled={urlInput.urlValidate === false}
        >
          {urlInput.loading ? (
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
          <ShortedUrl
            urlData={urlInput.response}
            loading={urlInput.loading}
            textCopy={urlInput.urlCopy}
            onCopy={copyUrl}
          />
        </div>
      </div>
    </>
  );
}

export default Home;

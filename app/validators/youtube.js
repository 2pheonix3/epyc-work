const handleCheckURL = () => {
    const valid = isValidYouTubeURL(url);
    setIsValid(valid);
  };

  const isValidYouTubeURL = (url) => {
    const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/|.*[?&]v=)?([^&]{11})/;
    return regex.test(url);
  };

  return (
    <div>
      <h1>YouTube URL Validator</h1>
      <input 
        type="text" 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        placeholder="Enter YouTube URL" 
      />
      <button onClick={handleCheckURL}>Check URL</button>

      {isValid !== null && (
        <p>
          The URL is {isValid ? 'valid' : 'invalid'}.
        </p>
      )}
    </div>
  );
};

export default YouTubeValidator;
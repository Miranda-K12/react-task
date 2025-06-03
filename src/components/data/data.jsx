import "./data.css";

function CollectData({ submissions }) {
  return (
    <div className="object-info-wrapper">
      {submissions.length === 0 ? (
        <h3>No data yet</h3>
      ) : (
        <ul>
          {submissions.map((data, index) => (
            <li key={index}>
              {"{"}
              <p>"First Name" : "{data.firstName}"</p>
              <p>"Last Name": "{data.lastName}"</p>
              <p>"Age": "{data.age}"</p>
              <p>"Employed": "{data.employed ? "Yes" : "No"}"</p>
              <p>"Favorite Color": "{data.favoriteColor}"</p>
              <p>"Sauces": "{data.sauces.join(", ")}"</p>
              <p>"Best Stooge": "{data.beststooge}"</p>
              <p>"Notes": "{data.notes}"</p>
              {"}"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CollectData;

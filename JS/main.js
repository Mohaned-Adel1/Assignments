let webSitesData = document.getElementById("webSitesData");

if (!localStorage.getItem("bookmarksList")) {
  localStorage.setItem("bookmarksList", JSON.stringify([]));
}

let bookmarks = JSON.parse(localStorage.getItem("bookmarksList"));

bookmarkSync(bookmarks);
function addWebsite() {
  let siteName = document.getElementById("siteName").value;
  let siteUrl = document.getElementById("siteURL").value;

  bookmarks.push({
    siteName: `${siteName}`,
    SiteURL: `${siteUrl}`,
  });
  localStorage.setItem("bookmarksList", JSON.stringify(bookmarks));

  bookmarkSync(bookmarks);
  document.getElementById("siteName").value = "";
  document.getElementById("siteURL").value = "";
}

function deleteSite(bookIndex) {
  bookmarks.splice(bookIndex, 1);
  localStorage.setItem("bookmarksList", JSON.stringify(bookmarks));
  bookmarkSync(bookmarks);
}

function bookmarkSync(listOfBookmarks) {
  let siteHTML = "";
  for (let i = 0; i < listOfBookmarks.length; i++) {
    let newSite = `
    <tr>
  <td>${i + 1}</td>
          <td>${listOfBookmarks[i].siteName}</td>
          <td>
            <button class="btn btn-success text-white " onclick="visitURL('${
              listOfBookmarks[i].SiteURL
            }')">
              <i class="fa-solid fa-eye pe-2"></i>
              Visit
            </button>
          </td>
          <td>
            <button class="btn btn-danger text-white" onclick="deleteSite(${i})">
              <i class="fa-solid fa-trash-can pe-2"></i>
              Delete
            </button>
          </td></tr>
  
  `;
    siteHTML += newSite;
  }
  webSitesData.innerHTML = siteHTML;
}
function visitURL(url) {
  console.log(url);
  window.open("https://www.google.com", "_blank");
}

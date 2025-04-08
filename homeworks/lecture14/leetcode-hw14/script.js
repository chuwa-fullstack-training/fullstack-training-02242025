// GitHub Users
fetch("https://api.github.com/users")
  .then((res) => res.json())
  .then((users) => {
    const userList = document.getElementById("user-list");
    users.slice(0, 5).forEach((user, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.login}</td>
        <td><img src="${user.avatar_url}" /></td>
      `;
      row.addEventListener("click", () => showUserProfile(user.login));
      userList.appendChild(row);
    });
  });

function showUserProfile(username) {
  fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((user) => {
      fetch(user.repos_url)
        .then((res) => res.json())
        .then((repos) => {
          const profile = document.getElementById("profile");
          profile.innerHTML = `
            <img src="${user.avatar_url}" />
            <h3>${user.name || user.login}</h3>
            <p>Location: ${user.location || "N/A"}</p>
            <h4>Repositories:</h4>
            <ul>
              ${repos
                .slice(0, 3)
                .map(
                  (repo) =>
                    `<li><a href="${repo.html_url}" target="_blank">${
                      repo.name
                    }</a>: ${repo.description || ""}</li>`
                )
                .join("")}
            </ul>
          `;
        });
    });
}

// Color Components
const colorGrid = document.getElementById("color-grid");
let components = Array.from({ length: 6 }, (_, i) => ({
  name: `Component ${i + 1}`,
  color: "",
}));
window.selectedComponent = 0;

function renderComponents() {
  colorGrid.innerHTML = "";
  const select = document.getElementById("component-select");
  select.innerHTML = ""; // 清空旧选项

  components.forEach((comp, index) => {
    // 更新 select 中的 options
    const option = document.createElement("option");
    option.value = index;
    option.textContent = comp.name;
    if (index == window.selectedComponent) {
      option.selected = true;
    }
    select.appendChild(option);

    // 渲染组件显示区域
    const div = document.createElement("div");
    div.className = "component";
    div.style.backgroundColor = comp.color || "#eee";
    div.innerHTML = `
      <label>Component name:</label>
      <input type="text" value="${comp.name}" data-index="${index}" />
    `;
    colorGrid.appendChild(div);
  });

  // 输入框绑定修改事件
  document.querySelectorAll(".component input").forEach((input) => {
    input.addEventListener("input", (e) => {
      const idx = e.target.dataset.index;
      components[idx].name = e.target.value;
      renderComponents(); // 更新组件与下拉菜单
    });
  });
}

renderComponents();

// 控制组件选择
document.getElementById("component-select").addEventListener("change", (e) => {
  window.selectedComponent = e.target.value;
});

// 控制颜色选择
document.getElementById("color-select").addEventListener("change", (e) => {
  if (window.selectedComponent !== undefined) {
    components[window.selectedComponent].color = e.target.value;
    renderComponents();
  }
});

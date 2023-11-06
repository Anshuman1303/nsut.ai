const team = document.getElementById("team-mem");
function filterTeam(but) {
  team.classList.remove("advisory");
  team.classList.remove("core");
  const filter = but.getAttribute("data-filter");
  document.getElementById("team-filter-wrap").getElementsByClassName("active")[0].classList.remove("active");
  if (filter) {
    team.classList.add(filter);
    document.getElementById("filter-" + filter).classList.add("active");
  } else {
    document.getElementById("filter-all").classList.add("active");
  }
}

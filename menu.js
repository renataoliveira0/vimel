
/* Script para fechar menu automaticamente ao clicar 
  <script>
    </script>
*/
const menu = document.getElementById("menuVimel");
    if (!bootstrap.Collapse.getInstance(menu)) {
      new bootstrap.Collapse(menu, { toggle: false });
    }

    document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        const bsCollapse = bootstrap.Collapse.getInstance(menu);
        if (
          bsCollapse &&
          window.getComputedStyle(document.querySelector(".navbar-toggler")).display !==
          "none"
        ) {
          bsCollapse.hide();
        }
      });
    });
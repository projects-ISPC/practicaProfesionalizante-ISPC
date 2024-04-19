import { User } from "./user.model";

export class UserRenderService {



  createUserssTableview(books: User[]): HTMLTableElement {
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    table.classList.add("table", "table-hover", "align-middle")

    let head =
      `<thead>
    <tr>
    <th scope="col">Socio</th>
    <th scope="col">Estado de supscripción</th>
    <th scope="col">Préstamos actuales</th>
    <th scope="col">Historial de préstamos</th>
    </tr>
  </thead>`

    table.insertAdjacentHTML("beforeend", head);

    let userElements = books.map(user =>
      `  <tr>
      <td>
        <div class="row">
          <div class="col-9 col-lg-3">
            <img src="${user.profilePic}" alt="Foto de perfil del usuario ${user.name}"
              class="img-fluid">
          </div>
          <div class="col-12 col-lg-5 align-self-center">
            <span>${user.name}</span>
          </div>
        </div>
      </td>
      <td>
        <div class="row badge rounded-pill status-pill py-2">
          <div class="col">
            <i class="bi bi-circle-fill ${user.subscription ? "text-secondary-green" : "text-secondary-alter-red"}"></i>
            <span class="text-center">${user.subscription ? "Activo" : "Inactivo"}</span>
          </div>
        </div>
      </td>
      <td>${user.actualRented} libro/s <a href="#" class="text-secondary-alter-red">ver detalle</a></td>
      <td>${user.rentedTotal} libro/s <a href="#" class="text-secondary-alter-red">ver detalle</a></td>
    </tr>`
    );

    userElements.forEach(element => tbody.insertAdjacentHTML("beforeend", element));
    table.appendChild(tbody);

    return table;
  }
}

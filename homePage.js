/* Code for UC 4 */

window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
});

// Template literal ES6 Feature

const createInnerHtml = () => {
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+"<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHTML = `${headerHtml}
        <tr>
            <td><img class = "profile" src = "C:\Users\LENOVO\Desktop\FS HTML_CSS LP02 Employee Payroll App Assets\assets\profile-images\Ellipse -2.png" alt =""></td>
            <td>Narayan Mahadevan</td>
            <td>Male</td>
            <td><div class = "dept-label">HR</div><div class = "dept-label">Finance</div></td>
            <td>300000</td>
            <td>1 NOV 2020</td>
            <td>
                <img name = "1" onclick = "remove(this)" src = "../assets/icons/delete-black-18dp.svg" alt = "Delete">
                <img name = "2" onclick = "update(this)" src = "../assets/icons/create-black-18dp.svg" alt = "Edit">
            </td>
        </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHTML;
}
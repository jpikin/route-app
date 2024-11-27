import { Outlet, Link, useLoaderData, Form } from 'react-router-dom';
import { getStudents, createStudent } from './forStorage'

export async function loader() {
    const students = await getStudents();
    return { students };
}
export async function action() {
    const student = await createStudent();
    return { student };
}

function Root() {
    const { students } = useLoaderData();
    return (
        <div id="main">
            <div id='menu'>
                <Form method="post">
                    <button type="submit">add student</button>
                </Form>

                <nav>
                    {students.length ? (students.map((student) => (
                        <Link key={student.id} to={`students/${student.id}`}>
                            {student.name ? student.name : <i>Unnamed</i>}
                        </Link>
                    ))) : <p>No students in list</p>}
                </nav>

            </div>

            <div id="student">
                <Outlet />
            </div>
        </div>
    );
}

export default Root;
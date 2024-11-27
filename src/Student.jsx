import { getStudent } from './forStorage';
import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
    const student = await getStudent(params.productId);
    return { student };
}



function Student() {

    const { student } = useLoaderData();

    return (
        <div>
            <h2>Student page</h2>
            <p>Name: {student.name ? student.name : <i>unnamed</i>}</p>
            <p>Surname: {student.surn ? student.surn : <i>unsurnamed</i>}</p>
            <p>Age: {student.age ? student.age : <i>unknown</i>}</p>
        </div>
    );
}

export default Student;
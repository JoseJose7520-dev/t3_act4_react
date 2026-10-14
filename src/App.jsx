import React from 'react';
import SimpleHeader from './components/SimpleHeader';
import UserCard from './components/UserCard';
import Counter from './components/Counter';
import TaskList from './components/TaskList';

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <SimpleHeader />
      
      <hr />
      
      <section style={{ margin: '20px 0' }}>
        <h2 style={{ textAlign: 'center' }}>1. Componente con Props</h2>
        <UserCard 
          nombre="Jose Jose Osvaldo"
          semestre="7mo Semestre"
          materia="Programación Web"
          rol="Estudiante de Ing. en Sistemas Computacionales" 
          avatar="https://api.dicebear.com/7.x/bottts/svg?seed=Osvaldo" 
        />
      </section>

      <hr />

      <section style={{ margin: '20px 0' }}>
        <h2 style={{ textAlign: 'center' }}>2. Componente con Estado (useState)</h2>
        <Counter />
      </section>

      <hr />

      <section style={{ margin: '20px 0' }}>
        <h2 style={{ textAlign: 'center' }}>3. Renderizado de Lista Dinámica</h2>
        <TaskList />
      </section>
    </div>
  );
}
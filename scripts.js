const turmas = 
    [
    {
        id: "UC1",
        nome: "Usabilidade e Dev Web",
        ementa: "asdflkj df lsdjfsdlfkj sdlf",
        diasAula: "5as e 6as às 19h",
        alunos: ['123', '456', '789']
    },
    {
        id: "UC2",
        nome: "Siostemas Distribuídos",
        ementa: "asdflkj df lsdjfsdlfkj sdlf",
        diasAula: "2as e 3as às 19h",
        alunos: ['123', '789']
        
    }];
    const alunos = new Map();
    alunos.set('123',{
            ra:'123',
            nome: 'Luana',
            idade: 20,
            sexo: 'F'
        });
    alunos.set('456',
        {
            nome: 'João',
            idade: 21,
            sexo: 'M'
        });
    alunos.set('789',    
        {
            ra: '789',
            nome: 'Luano',
            idade: 22,
            sexo: 'M'
        });
    
    function buscaAluno(ra) {
        return alunos.get(ra);
    }

    function criaTitulo(titulo) {
        const h1 = document.createElement('h1');
        h1.innerText = titulo;
        return h1;
    }
    function criaEmenta(ementa) {
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.innerText = "Ementa";
        div.appendChild(h2);
        const p = document.createElement('p');
        p.innerText = ementa;
        div.appendChild(p);
        return div;
    }

function criaListaAlunos(alunos) {
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.innerText = "Alunos";
        div.appendChild(h2);
        const ul = document.createElement('ul');
        div.appendChild(ul);
        alunos.forEach(ra => {
            const li = document.createElement('li');
            const aluno = buscaAluno(ra);
            li.innerText = aluno.nome;
            ul.appendChild(li);
        });
        return div;
    }
    
    function cardTurma(turma) {
        const app = document.getElementById('app');
        app.appendChild( criaTitulo(turma.nome) );
        app.appendChild(criaEmenta(turma.ementa));
        app.appendChild( criaListaAlunos(turma.alunos));
    }

    turmas.forEach(turma=>cardTurma(turma));
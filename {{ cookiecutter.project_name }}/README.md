# {{ cookiecutter.project_name }}

({{ cookiecutter.project_name }}) Guia de configuracao do workspace de desenvolvimento

### 01. Configure o ambiente de desenvolvimento: 
{{ cookiecutter.project_name }} em NodeJS

1.1. Baixar e instalar o NodeJS 12+
>__download__: https://nodejs.org/en/download/

1.2. Faca um clone do repositorio de codigo.

> Execute comando: Terminal (CMD)
```
  git clone "git@gitlab.example.com:<project namespace>/{{ coockiecutter.project_name }}"
  cd {{ cookiecutter.project_name }}
  npm install
  npm start
```

### URIs Info
  * __healthcheck__: http://localhost:3000/api/health
  * __list-users__: http://localhost:3000/api/list-users


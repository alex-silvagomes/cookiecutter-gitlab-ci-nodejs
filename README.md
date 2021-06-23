# Cookiecutter Gitlab CI

TODO

1. Instale [cookiecutter](https://cookiecutter.readthedocs.io/en/1.7.2/installation.html)
2. Estrutura do exemplo:
    - `cookiecutter.json` - Arquivo com as definições default
    - `{{ cookiecutter.project_name }}/` - Diretório que será usado como template
    - `{{ cookiecutter.project_name }}/{{ coockiecutter.file_name }}.txt` - Exemplo de criação de arquivos. Dentro deste arquivo tem uma diretiva para o cookiecutter preencher o arquivo com valores através da variável `file_content`
3. Execute o comando `cookiecutter --no-input .` para criar o exemplo com os valores default. Veja `cookiecutter --help` pra personalizar o exemplo

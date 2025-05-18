
@echo off
cls
:menu
cls

date /t

echo Computador: %computername%        Usuario: %username%
                   
echo  Menu das Atividades dia 29 Abril
echo  ==================================
echo * 1. Verificar Par ou Impar        * 
echo * 2. Classifica a Idade            *
echo * 3. Classifica a Nota de 0 a 10   *
echo * 4. Tres Opcao com Switch-case    *
echo * 5. Calculadora de IMC            *
echo * 6. Tipo de Triangulo             * 
echo * 7. Preco das macas               * 
echo * 8. Organizacao em ordem crescente* 
echo * 9. Contagem regressiva de 10 a 1 * 
echo * 10. Repetir um numero 10 vezes   * 
echo * 11. Soma de 5 numeros            *
echo * 12. Tabuada de 1 a 10            *
echo * 13. Calcular a media atitimetica * 
echo * 14. Calculadora fatorial         *
echo * 15. Sequensia de Fibonacci       *  
echo * 16. Sair                         * 
echo  ==================================

set /p opcao= Escolha uma opcao: 
echo ------------------------------
if %opcao% equ 1 goto opcao1
if %opcao% equ 2 goto opcao2
if %opcao% equ 3 goto opcao3
if %opcao% equ 4 goto opcao4
if %opcao% equ 5 goto opcao5
if %opcao% equ 6 goto opcao6
if %opcao% equ 7 goto opcao7
if %opcao% equ 8 goto opcao8
if %opcao% equ 9 goto opcao9
if %opcao% equ 10 goto opcao10
if %opcao% equ 11 goto opcao11
if %opcao% equ 12 goto opcao12
if %opcao% equ 13 goto opcao13
if %opcao% equ 14 goto opcao14
if %opcao% equ 15 goto opcao15
if %opcao% equ 16 goto opcao16
if %opcao% GEQ 17 goto opcao17

:opcao1
cls
node atividade_par_impar.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao2
cls
node Atividade_Idade.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao3
cls
node Atividade_NotaAluno.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao4
cls
node Atividade_TresEscolhas.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao5
cls
node Atividade_IMC.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao6
cls
node Atividade_Triangulo.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao7
cls
node Atividade_Macas.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao8
cls
node Atividade_OrdemNumero.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao9
cls
node Atividade_ContagemRegressiva.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao10
cls
node Atividade_NumeroRepitido.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao11
cls
node Atividade_SomaCinco.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao12
cls
node Atividade_Multiplicacao.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao13
cls
node Atividade_NumeroAritimetico.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao14
cls
node Atividade_NumeroFatorial.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao15
cls
node Atividade_Fibonacci.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu


:opcao18
cls
control.exe
pause
goto menu

:opcao16
cls
exit

:opcao17
echo ==============================================
echo * Opcao Invalida! Escolha outra opcao do menu *
echo ==============================================
pause
goto menu
# Konsumentverkets Designsystem

Arkitektur/ Översikt:
[https://github.com/Konsumentverket/FlippadArkitektur/](https://github.com/Konsumentverket/FlippadArkitektur/)

Designsystem för Hallå konsument:
[https://konsumentverket.github.io/designsystem/sites/hallakonsument/build/](https://konsumentverket.github.io/designsystem/sites/hallakonsument/build/)

Designsystem för Microsajt:
[https://konsumentverket.github.io/designsystem/sites/microsite/build](https://konsumentverket.github.io/designsystem/sites/microsite/build)

## Kör storybooks lokalt

Navigera till \designsystem\ mappen och kör följande script:

```
    //för hk
    npm run hk-storybook

    //för microsites
    npm run micro-storybook
```

## Kör storybooks lokalt med direkt uppdatering på flippadwebb

```
    cd ~/projects/Konsumentverket.github.io
    npm link
    cd ~/projects/flippad_web/hallakonsument/wwwroot
    npm link kov-components

    # Öppna två terminaler
    # terminal 1
    cd ~/projects/Konsumentverket.github.io/designsystem
    npm run hk-storybook

    # terminal 2
    cd ~/projects/Konsumentverket.github.io/
    npm start
```

### För att återställa

```
    cd ~/projects/flippad_web
    npm uninstall --no-save kov-components && npm install
    cd ~/projects/Konsumentverket.github.io
    npm uninstall
```

## Bygg statik version av storybooks

Navigera till \designsystem\ mappen och kör följande script:

```
    //för hk
    npm run hk-build-storybook

    //för microsites
    npm run micro-build-storybook
```

## Bygg distributions filer

I projektets root katalog för föjande kommando:

```
    npm start
```

## Bit.cloud

```
  ### install bit globally - you will need a bit.cloud account
  > nvm use 20
  > npx @teambit/bvm install
  ### init bit and login to your bit account
  > bit install
  > bit login
  ### build OR start bit
  > bit build
  > bit start

  ### To export to bit.cloud
  > bit tag --message "Export msg"
  > bit export

```

## Bit.dev

```
    bit watch - Starta watcher efter att du startat server, den snappar upp ändringar som görs i designsystemet
    bit tag - När du är klar kör detta kommando för att skapa upp nya verisoner av samtliga paket
    bit export konsumentverket.kov-compo - deploya ändringar till bit.dev
```

## Lägg till ny ikon i Designsystemet

```
1. Starta storybook, i vänstra menyn gå till Komponenter->Ikoner->Alla Redaktörs Ikoner
2. Skapa komponenten som renderar ikonen (utgå från t.ex UserInjured komponenten)
3. Lägg till viewbox värden som är original bildens värden (alltså i full storlek, öppna upp SVG:n i chrome och inspektera bilden)
4. Lägg till <path> och sedan ändra namnet under id propertyn (om <path> är omsluten av <g> så ska det också wrappas på samma sätt i komponenten, likt t.ex Hairdresser komponeten, i annat fall behövs inte <g>, behåll width=32 och height=32 i komponenten)
5. Lägg till nytt objekt likt alla andra under IconExport.json
6. Lägg till den fysiska SVG filen i SystemIconsSVG (om allt är OK så borde du kunna se din ikon i Storybook)
7. Gör en PR
```

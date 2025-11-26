# Konsumentverkets Designsystem


Designsystem för Konsumentverkets sajter:
[https://bit.cloud/konsumentverket-sverige/designsystem](https://bit.cloud/konsumentverket-sverige/designsystem)


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

## Lägg till ny ikon 

```
1. Skapa komponenten som renderar ikonen (utgå från t.ex UserInjured komponenten) i iconsSystem/SystemIcons eller iconsEditor/EditorIcons beroende på ikontyp
2. Ersätt fill-rule med fillRule och clip-path med clipPath
3. Lägg till nytt objekt likt alla andra under IconExport.json om ikonen ska vara tillgänglig i contentful
4. Exportera ikonen från index.ts
5. Lägg till den fysiska SVG filen i SystemIconsSvg alt EditorIconsSvg (om allt är OK så borde du kunna se din ikon i bit lokalt)
6. bit tag -m "added icon"
7. bit export
```

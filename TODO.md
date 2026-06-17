# Plan für Star Wars API App

API: https://swapi.info/people

## Komponenten

- `app-component`
- `selection-component`
  - Dropdown
  - Button
- `table-component`
  - Tabelle
  - Input: Character

```
// child - selection
clicked = output<string>()
this.clicked.emit("ein string")
// parent - app
<child (clicked)="setData()"></child>
 setData() {}


    @for (item of data(); track item) {
      <tr>
        <th scope="row">{{ item.name }}</th>
        <td>Height: {{ item.height }}</td>
      </tr>
    }
```

## Daten
- Character
  - name
  - hair color
  - birthday
```
data = input.required<Character[]>()
export interface Character   {
  name: string,
  height: number,
  mass: number,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
}
```

## Steps
- Komponenten erstellen
- Button erstellt mock daten
- Button macht API-Aufruf
- Daten anzeigen

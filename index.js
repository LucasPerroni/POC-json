// import o2x from "object-to-xml"
// import YAML from "yaml"

function Json() {
  const obj = {
    nome: "lucas",
    idade: 20,
    teste() {
      console.log("teste")
    },
  }

  const objJson = JSON.stringify(obj)
  const objDesJson = JSON.parse(objJson)

  console.log(obj)
  console.log(objJson)
  console.log(objDesJson)
}

function Xml() {
  const text = `
        <wrapper>
          <nome>Lucas</nome>
          <idade>20</idade>
        </wrapper>
        `

  const parse = new DOMParser()
  const xml = parse.parseFromString(text, "text/xml")

  console.log(xml.getElementsByTagName("idade")[0].childNodes[0].nodeValue)
  document.querySelector(".root").innerHTML = xml.getElementsByTagName("nome")[0].childNodes[0].nodeValue

  //   const obj = {
  //     nome: "lucas",
  //     idade: 20,
  //   }

  //   console.log(obj)
  //   console.log(o2x(obj))
}

function Yaml() {
  const obj = {
    nome: "lucas",
    idade: 20,
    teste: [10, 20, 30],
  }

  const objYaml = YAML.stringify(obj)
  const objDesYaml = YAML.parse(objYaml)

  console.log(obj)
  console.log(objYaml)
  console.log(objDesYaml)
}

Json()
// Xml()
// Yaml()

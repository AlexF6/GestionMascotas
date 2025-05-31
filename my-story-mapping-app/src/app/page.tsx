"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StoryMappingTemplate() {
  const [activities, setActivities] = useState([
    {
      id: 1,
      title: "Configurar Perfil y Mascota(s)",
      steps: [
        {
          id: 1,
          title: "Registrarse / Iniciar Sesión",
          tasks: [
            { id: 1, title: "Crear cuenta nueva (email/contraseña)", priority: "Must", sprint: 1 },
            { id: 2, title: "Iniciar sesión con cuenta existente", priority: "Must", sprint: 1 },
            { id: 3, title: "Recuperar contraseña de la cuenta", priority: "Should", sprint: 2 },
          ],
        },
        {
          id: 2,
          title: "Añadir Información de la Mascota",
          tasks: [
            { id: 4, title: "Ingresar nombre, especie, raza, fecha de nacimiento", priority: "Must", sprint: 1 },
            { id: 6, title: "Añadir historial médico de la máscota(s)", priority: "Should", sprint: 2 },
            { id: 5, title: "Subir foto de la mascota(s)", priority: "Could", sprint: 3 },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Programar Recordatorios de Cuidado",
      steps: [
        {
          id: 3,
          title: "Crear Recordatorio",
          tasks: [
            { id: 7, title: "Seleccionar Tipo de Recordatorio", priority: "Must", sprint: 1 },
            { id: 8, title: "Establecer fecha de Recordatorio", priority: "Must", sprint: 1 },
            { id: 9, title: "Configurar recurrencia", priority: "Should", sprint: 2 },
            { id: 10, title: "Añadir notas", priority: "Could", sprint: 3 },
          ],
        },
        {
          id: 4,
          title: "Gestionar Recordatorio",
          tasks: [
            { id: 11, title: "Editar recordatorio", priority: "Should", sprint: 2 },
            { id: 12, title: "Eliminar recordatorio", priority: "Should", sprint: 2 },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Recibir Notificaciones",
      steps: [
        {
          id: 5,
          title: "Gestionar Alertas",
          tasks: [
            { id: 13, title: "Recibir alerta básica (push notification) en el móvil", priority: "Must", sprint: 1 },
            { id: 14, title: "Marcar completado", priority: "Must", sprint: 1 },
            { id: 15, title: "Posponer recordatorio", priority: "Should", sprint: 2 },
            { id: 16, title: "Personalizar alertas", priority: "Could", sprint: 3 },
          ],
        },
        {
          id: 6,
          title: "Consultar Historial",
          tasks: [
            { id: 17, title: "Ver calendario", priority: "Should", sprint: 2 },
            { id: 18, title: "Filtrar actividades", priority: "Could", sprint: 3 },
            { id: 19, title: "Exportar datos", priority: "Won't", sprint: null },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Conectar con Veterinario",
      steps: [
        {
          id: 7,
          title: "Gestionar Contactos",
          tasks: [
            { id: 20, title: "Añadir veterinario", priority: "Should", sprint: 2 },
            { id: 21, title: "Compartir historial", priority: "Could", sprint: 3 },
            { id: 22, title: "Chat en tiempo real", priority: "Won't", sprint: null },
            { id: 23, title: "Videollamadas", priority: "Won't", sprint: null },
          ],
        },
      ],
    },
  ])

  const [userInfo, setUserInfo] = useState({
    name: "Dueño de Mascota",
    goal: "Gestionar y recordar fácilmente el cuidado de mi mascota para mantener su salud y bienestar.",
  })

  const [releases, setReleases] = useState([
    { id: 1, name: "MVP - Sprint 1", description: "Must Have - Funcionalidades esenciales" },
    { id: 2, name: "Release 2 - Sprint 2", description: "Should Have - Funcionalidades importantes" },
    { id: 3, name: "Release 3 - Sprint 3", description: "Could Have - Funcionalidades deseables" },
  ])

  const getPriorityColor = (priority: string) => { // Add ': string'
  switch (priority) {
    case "Must":
      return "bg-red-100 text-red-700 border-red-200"
    case "Should":
      return "bg-orange-100 text-orange-700 border-orange-200"
    case "Could":
      return "bg-blue-100 text-blue-700 border-blue-200"
    case "Won't":
      return "bg-gray-100 text-gray-700 border-gray-200"
    default:
      return "bg-gray-100 text-gray-700 border-gray-200"
  }
}

const getPriorityLabel = (priority: string) => { // Add ': string'
  switch (priority) {
    case "Must":
      return "M"
    case "Should":
      return "S"
    case "Could":
      return "C"
    case "Won't":
      return "W"
    default:
      return "?"
  }
}

  const exportStoryMap = () => {
    const data = {
      user: userInfo,
      activities,
      releases,
      methodology: "MoSCoW",
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "story-mapping-moscow.json"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="bg-white min-h-screen p-6 overflow-x-auto">
      <div
        className="border-2 border-gray-300 rounded-lg p-6 min-w-[1200px] relative"
        style={{
          background: "white",
          boxShadow: "2px 2px 10px rgba(0,0,0,0.05)",
          //transform: "rotate(-0.5deg)",
        }}
      >
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-4xl font-bold text-gray-700">USER STORY MAPPING</h1>
          <div className="text-sm text-gray-600">
            <div className="text-xs font-semibold mb-2 text-center">MoSCoW Method</div>
            <div className="grid grid-cols-2 gap-2">
              <span className="flex items-center gap-1">
                <div className="w-4 h-4 bg-red-100 border border-red-200 rounded flex items-center justify-center text-[10px] font-bold text-red-700">
                  M
                </div>
                <span className="text-xs">Must have</span>
              </span>
              <span className="flex items-center gap-1">
                <div className="w-4 h-4 bg-orange-100 border border-orange-200 rounded flex items-center justify-center text-[10px] font-bold text-orange-700">
                  S
                </div>
                <span className="text-xs">Should have</span>
              </span>
              <span className="flex items-center gap-1">
                <div className="w-4 h-4 bg-blue-100 border border-blue-200 rounded flex items-center justify-center text-[10px] font-bold text-blue-700">
                  C
                </div>
                <span className="text-xs">Could have</span>
              </span>
              <span className="flex items-center gap-1">
                <div className="w-4 h-4 bg-gray-100 border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-700">
                  W
                </div>
                <span className="text-xs">Won't have</span>
              </span>
            </div>
          </div>
        </div>

        {/* User and Goal Section */}
        <div className="flex mb-10 gap-6">
          <div className="flex flex-col items-center">
            <span className="text-lg font-medium text-gray-600 mb-2">USER</span>
            <div className="bg-blue-100 border-2 border-blue-200 rounded-md p-3 w-40 h-40 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-blue-200 mb-2 flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <div className="text-center font-medium">{userInfo.name}</div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-lg font-medium text-gray-600 mb-2">USER GOAL</span>
            <div className="bg-green-50 border-2 border-green-200 rounded-md p-3 w-60 h-40 flex items-center justify-center">
              <div className="text-center text-sm p-2">{userInfo.goal}</div>
            </div>
          </div>
        </div>

        {/* Backbone Section */}
        <div className="mb-2">
          <div className="flex items-center mb-4">
            <span className="text-lg font-medium text-gray-600 mr-2">BACKBONE</span>
            <div className="w-8 h-8 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 12C3 12 7 4 12 4C17 4 21 12 21 12C21 12 17 20 12 20C7 20 3 12 3 12Z"
                  stroke="#666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-lg font-medium text-gray-600 ml-auto">NARRATIVE FLOW</span>
            <div className="w-8 h-8 flex items-center justify-center ml-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="#666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex-1 min-w-[220px]">
                <div className="bg-blue-200 border-2 border-blue-300 rounded-md p-3 mb-4 h-20 flex items-center justify-center">
                  <div className="text-center font-bold text-sm">{activity.title}</div>
                </div>

                <div className="flex flex-wrap gap-2 mb-2">
                  {activity.steps.map((step) => (
                    <div key={step.id} className="w-full">
                      <div className="bg-pink-200 border-2 border-pink-300 rounded-md p-2 mb-3">
                        <div className="text-center text-sm font-semibold">{step.title}</div>
                      </div>

                      {/* Tasks for each step */}
                      <div className="space-y-2 mb-4">
                        {step.tasks.map((task) => (
                          <div
                            key={task.id}
                            className={`border-2 rounded-md p-2 ${
                              task.priority === "Won't" ? "opacity-60" : ""
                            } ${getPriorityColor(task.priority)}`}
                          >
                            <div className="text-center text-xs space-y-1">
                              <div className="font-medium">{task.title}</div>
                              <div className="flex justify-between items-center text-[10px]">
                                <span className={`px-2 py-1 rounded font-bold ${getPriorityColor(task.priority)}`}>
                                  {getPriorityLabel(task.priority)}
                                </span>
                                {task.sprint && (
                                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded font-bold">
                                    S{task.sprint}
                                  </span>
                                )}
                                {!task.sprint && task.priority === "Won't" && (
                                  <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded font-bold text-[9px]">
                                    NO SPRINT
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Release Slices */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium text-gray-600">RELEASE SLICES</span>
          </div>

          <div className="flex gap-4">
            {releases.map((release) => (
              <div key={release.id} className="flex-1">
                <div className="bg-green-100 border-2 border-green-200 rounded-md p-3">
                  <div className="text-center font-bold text-sm">{release.name}</div>
                  <div className="text-center text-xs text-gray-600 mt-1">{release.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MoSCoW Summary */}
        <div className="mt-8 bg-gray-50 border-2 border-gray-200 rounded-md p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Resumen MoSCoW</h3>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="font-bold text-red-700">MUST HAVE</div>
              <div className="text-xs text-gray-600">
                {activities.flatMap((a) => a.steps.flatMap((s) => s.tasks)).filter((t) => t.priority === "Must").length}{" "}
                historias
              </div>
            </div>
            <div className="text-center">
              <div className="font-bold text-orange-700">SHOULD HAVE</div>
              <div className="text-xs text-gray-600">
                {
                  activities.flatMap((a) => a.steps.flatMap((s) => s.tasks)).filter((t) => t.priority === "Should")
                    .length
                }{" "}
                historias
              </div>
            </div>
            <div className="text-center">
              <div className="font-bold text-blue-700">COULD HAVE</div>
              <div className="text-xs text-gray-600">
                {
                  activities.flatMap((a) => a.steps.flatMap((s) => s.tasks)).filter((t) => t.priority === "Could")
                    .length
                }{" "}
                historias
              </div>
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-700">WON'T HAVE</div>
              <div className="text-xs text-gray-600">
                {
                  activities.flatMap((a) => a.steps.flatMap((s) => s.tasks)).filter((t) => t.priority === "Won't")
                    .length
                }{" "}
                historias
              </div>
            </div>
          </div>
        </div>

        {/* Export Button */}
        {/* <div className="absolute top-4 left-4">
          <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={exportStoryMap}>
            <Download className="h-4 w-4" />
            <span>Exportar</span>
          </Button>
        </div> */}
      </div>
    </div>
  )
}

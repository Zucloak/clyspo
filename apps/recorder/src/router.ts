// Generouted, changes to this file will be overridden
/* eslint-disable */

import { components, hooks } from '@generouted/solid-router/client'

export type Path =
  | `/editor`
  | `/editor/AspectRatioSelect`
  | `/editor/CaptionsTab`
  | `/editor/ConfigSidebar`
  | `/editor/Editor`
  | `/editor/ExportDialog`
  | `/editor/Header`
  | `/editor/Player`
  | `/editor/PresetsDropdown`
  | `/editor/ShadowSettings`
  | `/editor/TextInput`
  | `/editor/Timeline`
  | `/editor/Timeline/ClipTrack`
  | `/editor/Timeline/Track`
  | `/editor/Timeline/ZoomTrack`
  | `/editor/ui`
  | `/in-progress-recording`
  | `/layout`
  | `/mode-select`
  | `/notifications`
  | `/recordings-overlay`
  | `/window-capture-occluder`

export type Params = {

}

export type ModalPath = never

export const { A, Navigate } = components<Path, Params>()
export const { useMatch, useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()

// Tridactyl Cheatsheet - Auto-generated from config commands

import * as config from "@src/lib/config"

// Mode configuration
const MODE_CONFIG = {
    normal: { configKey: "nmaps" as const, name: "Normal Mode" },
    hint: { configKey: "hintmaps" as const, name: "Hint Mode" },
    insert: { configKey: "imaps" as const, name: "Insert Mode" },
    command: { configKey: "exmaps" as const, name: "Command Mode" },
    visual: { configKey: "vmaps" as const, name: "Visual Mode" },
    ignore: { configKey: "ignoremaps" as const, name: "Ignore Mode" },
}

// Category definitions
const CATEGORIES: Record<string, { name: string; order: number }> = {
    navigation: { name: "Navigation", order: 1 },
    tabs: { name: "Tabs", order: 2 },
    opening: { name: "Opening URLs", order: 3 },
    history: { name: "History", order: 4 },
    clipboard: { name: "Clipboard", order: 5 },
    page: { name: "Page Actions", order: 6 },
    zoom: { name: "Zoom", order: 7 },
    bookmarks: { name: "Bookmarks & Marks", order: 8 },
    hints: { name: "Hints", order: 9 },
    hintControl: { name: "Hint Controls", order: 10 },
    modes: { name: "Mode Switching", order: 11 },
    editing: { name: "Text Editing", order: 12 },
    completion: { name: "Completion", order: 13 },
    selection: { name: "Selection", order: 14 },
    other: { name: "Other", order: 99 },
}

// Command to description/category mapping
function parseCommand(cmd: string): { desc: string; cat: string } {
    const command = cmd.trim()

    // Scrolling
    if (command.startsWith("scrollline")) {
        const amount = parseInt(command.split(" ")[1], 10) || 0
        return {
            desc: amount > 0 ? "Scroll down" : "Scroll up",
            cat: "navigation",
        }
    }
    if (command.startsWith("scrollpx")) {
        const amount = parseInt(command.split(" ")[1], 10) || 0
        return {
            desc: amount > 0 ? "Scroll right" : "Scroll left",
            cat: "navigation",
        }
    }
    if (command.startsWith("scrollpage")) {
        const amount = parseFloat(command.split(" ")[1]) || 0
        if (Math.abs(amount) < 1) {
            return {
                desc:
                    amount > 0
                        ? "Scroll half page down"
                        : "Scroll half page up",
                cat: "navigation",
            }
        }
        return {
            desc: amount > 0 ? "Scroll page down" : "Scroll page up",
            cat: "navigation",
        }
    }
    if (command.startsWith("scrollto")) {
        const parts = command.split(" ")
        if (parts.includes("x")) {
            return {
                desc:
                    parts[1] === "0"
                        ? "Scroll to left edge"
                        : "Scroll to right edge",
                cat: "navigation",
            }
        }
        return {
            desc: parts[1] === "0" ? "Scroll to top" : "Scroll to bottom",
            cat: "navigation",
        }
    }

    // Tabs
    if (command === "tabclose" || command === "tabclose ")
        return { desc: "Close tab", cat: "tabs" }
    if (command === "tabprev") return { desc: "Previous tab", cat: "tabs" }
    if (command === "tabnext") return { desc: "Next tab", cat: "tabs" }
    if (command === "tabnext_gt")
        return { desc: "Next tab (or go to #)", cat: "tabs" }
    if (command === "tabfirst") return { desc: "First tab", cat: "tabs" }
    if (command === "tablast") return { desc: "Last tab", cat: "tabs" }
    if (command.startsWith("tabmove")) {
        return {
            desc: command.includes("-") ? "Move tab left" : "Move tab right",
            cat: "tabs",
        }
    }
    if (command === "tabclosealltoleft")
        return { desc: "Close tabs to left", cat: "tabs" }
    if (command === "tabclosealltoright")
        return { desc: "Close tabs to right", cat: "tabs" }
    if (command === "tabaudio")
        return { desc: "Go to audible tab", cat: "tabs" }
    if (command === "pin") return { desc: "Pin/unpin tab", cat: "tabs" }
    if (command.startsWith("mute"))
        return { desc: "Mute/unmute tab", cat: "tabs" }
    if (command === "undo") return { desc: "Undo close tab", cat: "tabs" }
    if (command === "undo window")
        return { desc: "Undo close window", cat: "tabs" }
    if (command === "tab #") return { desc: "Switch to last tab", cat: "tabs" }

    // Opening URLs
    if (command === "fillcmdline open")
        return { desc: "Open URL", cat: "opening" }
    if (command === "fillcmdline tabopen")
        return { desc: "Open URL in new tab", cat: "opening" }
    if (command === "fillcmdline winopen")
        return { desc: "Open URL in new window", cat: "opening" }
    if (command === "current_url open")
        return { desc: "Edit current URL", cat: "opening" }
    if (command === "current_url tabopen")
        return { desc: "Edit URL in new tab", cat: "opening" }
    if (command === "current_url winopen")
        return { desc: "Edit URL in new window", cat: "opening" }
    if (command === "fillcmdline open search")
        return { desc: "Search", cat: "opening" }
    if (command === "fillcmdline tabopen search")
        return { desc: "Search in new tab", cat: "opening" }
    if (command === "clipboard open")
        return { desc: "Open clipboard URL", cat: "opening" }
    if (command === "clipboard tabopen")
        return { desc: "Open clipboard in new tab", cat: "opening" }
    if (command === "fillcmdline tab")
        return { desc: "Switch tab", cat: "opening" }
    if (command === "fillcmdline taball")
        return { desc: "Switch tab (all windows)", cat: "opening" }
    if (command === "fillcmdline_notrail")
        return { desc: "Command line", cat: "modes" }

    // History/Navigation
    if (command === "back") return { desc: "Go back", cat: "history" }
    if (command === "forward") return { desc: "Go forward", cat: "history" }
    if (command === "jumpprev")
        return { desc: "Jump to previous position", cat: "history" }
    if (command === "jumpnext")
        return { desc: "Jump to next position", cat: "history" }
    if (command === "home") return { desc: "Go to homepage", cat: "history" }
    if (command === "home true")
        return { desc: "Homepage in new tab", cat: "history" }
    if (command === "urlparent")
        return { desc: "Go to parent URL", cat: "history" }
    if (command === "urlroot") return { desc: "Go to root URL", cat: "history" }
    if (command === "followpage next")
        return { desc: "Next page", cat: "history" }
    if (command === "followpage prev")
        return { desc: "Previous page", cat: "history" }
    if (command.startsWith("urlincrement")) {
        const amount = parseInt(command.split(" ")[1], 10) || 0
        return {
            desc: amount > 0 ? "Increment URL number" : "Decrement URL number",
            cat: "history",
        }
    }
    if (command.startsWith("changelistjump"))
        return { desc: "Jump to last edit", cat: "history" }

    // Clipboard
    if (command === "clipboard yank")
        return { desc: "Copy URL", cat: "clipboard" }
    if (command === "clipboard yankshort")
        return { desc: "Copy short URL", cat: "clipboard" }
    if (command === "clipboard yankcanon")
        return { desc: "Copy canonical URL", cat: "clipboard" }
    if (command === "clipboard yankmd")
        return { desc: "Copy as Markdown", cat: "clipboard" }
    if (command === "clipboard yankorg")
        return { desc: "Copy as Org-mode", cat: "clipboard" }
    if (command === "clipboard yanktitle")
        return { desc: "Copy page title", cat: "clipboard" }
    if (command.startsWith("text2qr"))
        return { desc: "Show as QR code", cat: "clipboard" }

    // Page actions
    if (command === "reload") return { desc: "Reload page", cat: "page" }
    if (command === "reloadhard") return { desc: "Hard reload", cat: "page" }
    if (command === "stop") return { desc: "Stop loading", cat: "page" }
    if (command.startsWith("reader"))
        return { desc: "Reader mode", cat: "page" }
    if (command === "viewsource") return { desc: "View source", cat: "page" }
    if (command === "focusinput") return { desc: "Focus input", cat: "page" }
    if (command === "focusinput -n")
        return { desc: "Focus next input", cat: "page" }
    if (command === "focusinput -N")
        return { desc: "Focus previous input", cat: "page" }
    if (command === "rot13") return { desc: "ROT13 encode", cat: "page" }
    if (command === "jumble") return { desc: "Jumble text", cat: "page" }
    if (command === "help") return { desc: "Open help", cat: "page" }
    if (command === "qall") return { desc: "Quit browser", cat: "page" }
    if (command === "repeat")
        return { desc: "Repeat last command", cat: "page" }

    // Zoom
    if (command.startsWith("zoom")) {
        const parts = command.split(" ")
        const amount = parseFloat(parts[1]) || 0
        if (parts[1] === "1") return { desc: "Reset zoom", cat: "zoom" }
        if (parts[1] === "3") return { desc: "Maximum zoom", cat: "zoom" }
        if (parts[1] === "0.3") return { desc: "Minimum zoom", cat: "zoom" }
        if (Math.abs(amount) >= 0.5)
            return {
                desc: amount > 0 ? "Zoom in more" : "Zoom out more",
                cat: "zoom",
            }
        return { desc: amount > 0 ? "Zoom in" : "Zoom out", cat: "zoom" }
    }

    // Bookmarks & Marks
    if (command === "current_url bmark")
        return { desc: "Bookmark page", cat: "bookmarks" }
    if (command === "bmark")
        return { desc: "Bookmark (prompt)", cat: "bookmarks" }
    if (command.startsWith("gobble 1 quickmark"))
        return { desc: "Set quickmark", cat: "bookmarks" }
    if (command.startsWith("gobble 1 markadd"))
        return { desc: "Set mark", cat: "bookmarks" }
    if (command.startsWith("gobble 1 markjump"))
        return { desc: "Jump to mark", cat: "bookmarks" }

    // Hints
    if (command === "hint") return { desc: "Follow link", cat: "hints" }
    if (command === "hint -b")
        return { desc: "Open in background tab", cat: "hints" }
    if (command === "hint -qb")
        return { desc: "Multi: background tab", cat: "hints" }
    if (command === "hint -i") return { desc: "Focus image", cat: "hints" }
    if (command === "hint -I") return { desc: "Open image", cat: "hints" }
    if (command === "hint -k") return { desc: "Kill element", cat: "hints" }
    if (command === "hint -K") return { desc: "Kill multiple", cat: "hints" }
    if (command === "hint -y") return { desc: "Copy link URL", cat: "hints" }
    if (command === "hint -p") return { desc: "Copy text", cat: "hints" }
    if (command === "hint -P")
        return { desc: "Copy text (notify)", cat: "hints" }
    if (command === "hint -h") return { desc: "Select element", cat: "hints" }
    if (command === "hint -r") return { desc: "Read aloud", cat: "hints" }
    if (command === "hint -s") return { desc: "Save link", cat: "hints" }
    if (command === "hint -S") return { desc: "Save (no prompt)", cat: "hints" }
    if (command === "hint -a") return { desc: "Save as...", cat: "hints" }
    if (command === "hint -A")
        return { desc: "Save as (no prompt)", cat: "hints" }
    if (command === "hint -w") return { desc: "Open in window", cat: "hints" }
    if (command === "hint -z") return { desc: "Zoom to element", cat: "hints" }
    if (command === "hint -V") return { desc: "Play video (mpv)", cat: "hints" }
    if (command === "hint -#") return { desc: "Copy anchor", cat: "hints" }
    if (command === "hint -; *") return { desc: "Focus element", cat: "hints" }
    if (command.startsWith("hint -q"))
        return {
            desc: "Multi: " + command.replace("hint -q", "").trim(),
            cat: "hints",
        }
    if (command.startsWith("hint -W")) {
        const target = command.replace("hint -W ", "")
        if (target === "mpvsafe") return { desc: "Play in mpv", cat: "hints" }
        if (target === "tabopen")
            return { desc: "Hint to new tab", cat: "hints" }
        if (target.startsWith("fillcmdline"))
            return { desc: "Hint to command line", cat: "hints" }
        return { desc: "Hint: " + target, cat: "hints" }
    }
    if (command.startsWith("hint -JFc"))
        return { desc: "Image search", cat: "hints" }
    if (command.startsWith("hint -cF"))
        return { desc: "Copy image URL", cat: "hints" }

    // Hint mode controls
    if (command === "hint.popKey")
        return { desc: "Delete last char", cat: "hintControl" }
    if (command === "hint.reset")
        return { desc: "Cancel hints", cat: "hintControl" }
    if (command === "hint.focusNextHint")
        return { desc: "Next hint", cat: "hintControl" }
    if (command === "hint.focusPreviousHint")
        return { desc: "Previous hint", cat: "hintControl" }
    if (command === "hint.focusTopHint")
        return { desc: "Hint above", cat: "hintControl" }
    if (command === "hint.focusBottomHint")
        return { desc: "Hint below", cat: "hintControl" }
    if (command === "hint.focusLeftHint")
        return { desc: "Hint left", cat: "hintControl" }
    if (command === "hint.focusRightHint")
        return { desc: "Hint right", cat: "hintControl" }
    if (command === "hint.selectFocusedHint")
        return { desc: "Select hint", cat: "hintControl" }

    // Mode switching
    if (command === "mode normal") return { desc: "Normal mode", cat: "modes" }
    if (command === "mode ignore") return { desc: "Ignore mode", cat: "modes" }
    if (command.startsWith("composite mode normal"))
        return { desc: "Normal mode", cat: "modes" }
    if (command.startsWith("composite unfocus"))
        return { desc: "Exit to normal", cat: "modes" }
    if (command.startsWith("nmode normal 1"))
        return { desc: "One normal command", cat: "modes" }
    if (command.startsWith("nmode ignore 1"))
        return { desc: "Pass next key", cat: "modes" }
    if (command === "escapehatch") return { desc: "Escape hatch", cat: "modes" }

    // Command line (exmaps)
    if (command === "ex.accept_line")
        return { desc: "Execute", cat: "completion" }
    if (command === "ex.execute_ex_on_completion")
        return { desc: "Execute on completion", cat: "completion" }
    if (command === "ex.hide_and_clear") return { desc: "Close", cat: "modes" }
    if (command === "ex.prev_history")
        return { desc: "Previous history", cat: "completion" }
    if (command === "ex.next_history")
        return { desc: "Next history", cat: "completion" }
    if (command === "ex.complete")
        return { desc: "Complete", cat: "completion" }
    if (command === "ex.next_completion")
        return { desc: "Next completion", cat: "completion" }
    if (command === "ex.prev_completion")
        return { desc: "Previous completion", cat: "completion" }
    if (command === "ex.insert_space_or_completion")
        return { desc: "Space or complete", cat: "completion" }
    if (command === "ex.insert_space")
        return { desc: "Insert space", cat: "completion" }
    if (command.startsWith("ex.execute_ex_on_completion_args")) {
        const args = command.replace("ex.execute_ex_on_completion_args ", "")
        if (args === "tabclose")
            return { desc: "Close completion tab", cat: "completion" }
        if (args === "clipboard yank")
            return { desc: "Copy completion URL", cat: "completion" }
        if (args === "tabopen -b")
            return { desc: "Open in background", cat: "completion" }
        if (args === "winopen")
            return { desc: "Open in window", cat: "completion" }
        return { desc: "Execute: " + args, cat: "completion" }
    }

    // Text editing
    if (command === "text.backward_word")
        return { desc: "Back one word", cat: "editing" }
    if (command === "text.forward_word")
        return { desc: "Forward one word", cat: "editing" }
    if (command === "text.end_of_line")
        return { desc: "End of line", cat: "editing" }
    if (command === "text.kill_word")
        return { desc: "Delete word forward", cat: "editing" }
    if (command === "text.backward_kill_word")
        return { desc: "Delete word back", cat: "editing" }
    if (command === "text.backward_kill_line")
        return { desc: "Delete to start", cat: "editing" }
    if (command === "text.kill_line")
        return { desc: "Delete to end", cat: "editing" }
    if (command === "editor") return { desc: "Open editor", cat: "editing" }

    // Visual mode
    if (command.includes("getSelection")) {
        if (command.includes("clipboard yank"))
            return { desc: "Copy selection", cat: "selection" }
        if (command.includes("empty"))
            return { desc: "Exit visual mode", cat: "modes" }
        if (command.includes("fillcmdline open"))
            return { desc: "Search selection", cat: "selection" }
        if (command.includes("fillcmdline tabopen"))
            return { desc: "Search in new tab", cat: "selection" }
        if (command.includes("text2qr"))
            return { desc: "Selection to QR", cat: "selection" }
        if (command.includes("modify")) {
            if (command.includes("forward") && command.includes("character"))
                return { desc: "Extend right", cat: "selection" }
            if (command.includes("backward") && command.includes("character"))
                return { desc: "Extend left", cat: "selection" }
            if (command.includes("forward") && command.includes("word"))
                return { desc: "Extend to word", cat: "selection" }
            if (command.includes("backward") && command.includes("word"))
                return { desc: "Extend back word", cat: "selection" }
            if (command.includes("forward") && command.includes("line"))
                return { desc: "Extend down", cat: "selection" }
            if (command.includes("backward") && command.includes("line"))
                return { desc: "Extend up", cat: "selection" }
            if (command.includes("lineboundary") && command.includes("forward"))
                return { desc: "Extend to EOL", cat: "selection" }
            if (
                command.includes("lineboundary") &&
                command.includes("backward")
            )
                return { desc: "Extend to BOL", cat: "selection" }
        }
    }
    if (command.includes("selectNodeContents"))
        return { desc: "Select element", cat: "selection" }
    if (command.includes("reverseSelection"))
        return { desc: "Swap direction", cat: "selection" }

    // Composite commands - try to extract meaningful info
    if (
        command.startsWith("composite") &&
        command.includes("tabprev") &&
        command.includes("tabclose")
    ) {
        return { desc: "Close, go to prev", cat: "tabs" }
    }

    // JS commands - simplify
    if (command.startsWith("js ")) {
        if (command.includes("tabclose"))
            return { desc: "Close tab (special)", cat: "tabs" }
        return { desc: "Custom action", cat: "other" }
    }

    return { desc: command, cat: "other" }
}

// Keys to skip
const SKIP_KEYS = new Set([
    "🕷🕷INHERITS🕷🕷",
    "<AS-ArrowUp><AS-ArrowUp><AS-ArrowDown><AS-ArrowDown><AS-ArrowLeft><AS-ArrowRight><AS-ArrowLeft><AS-ArrowRight>ba",
])

// Key formatting
const SPECIAL_KEYS: Record<string, string> = {
    "<Escape>": "Esc",
    "<Tab>": "Tab",
    "<Enter>": "Enter",
    "<Space>": "Space",
    "<Backspace>": "Bksp",
    "<Delete>": "Del",
    "<ArrowUp>": "↑",
    "<ArrowDown>": "↓",
    "<ArrowLeft>": "←",
    "<ArrowRight>": "→",
    "<F1>": "F1",
    "<Insert>": "Ins",
}

interface ParsedKey {
    modifiers: string[]
    key: string
    isSequence: boolean
}

function parseKeyParts(key: string): string[] {
    const parts: string[] = []
    let remaining = key
    while (remaining.length > 0) {
        const bracketMatch = /^<([^>]+)>/.exec(remaining)
        if (bracketMatch) {
            parts.push(bracketMatch[0])
            remaining = remaining.slice(bracketMatch[0].length)
        } else {
            parts.push(remaining[0])
            remaining = remaining.slice(1)
        }
    }
    return parts
}

function parseKey(key: string): ParsedKey {
    if (SPECIAL_KEYS[key]) {
        return { modifiers: [], key: SPECIAL_KEYS[key], isSequence: false }
    }
    const modifierMatch = /^<([ACS]+)-(.+)>$/.exec(key)
    if (modifierMatch) {
        const mods = modifierMatch[1]
        let mainKey = modifierMatch[2]
        const modLabels: string[] = []
        if (mods.includes("C")) modLabels.push("Ctrl")
        if (mods.includes("A")) modLabels.push("Alt")
        if (mods.includes("S")) modLabels.push("Shift")
        const specialKeyName = `<${mainKey}>`
        if (SPECIAL_KEYS[specialKeyName]) {
            mainKey = SPECIAL_KEYS[specialKeyName]
        } else if (mainKey === "Insert") {
            mainKey = "Ins"
        } else if (mainKey === "Delete") {
            mainKey = "Del"
        }
        return { modifiers: modLabels, key: mainKey, isSequence: false }
    }
    const bracketMatch = /^<(.+)>$/.exec(key)
    if (bracketMatch) {
        const inner = bracketMatch[1]
        if (inner === "Insert")
            return { modifiers: [], key: "Ins", isSequence: false }
        if (inner === "Delete")
            return { modifiers: [], key: "Del", isSequence: false }
        return { modifiers: [], key: inner, isSequence: false }
    }
    if (key.length > 1) {
        return { modifiers: [], key, isSequence: true }
    }
    return { modifiers: [], key, isSequence: false }
}

function renderSingleKey(parsed: ParsedKey): string {
    let html = ""
    if (parsed.modifiers.length > 0) {
        parsed.modifiers.forEach(mod => {
            html += `<span class="key key-modifier">${mod}</span>`
            html += '<span class="key-plus">+</span>'
        })
    }
    if (parsed.isSequence) {
        html += '<span class="key-sequence">'
        for (const char of parsed.key) {
            html += `<span class="key">${escapeHtml(char)}</span>`
        }
        html += "</span>"
    } else {
        html += `<span class="key">${escapeHtml(parsed.key)}</span>`
    }
    return html
}

function renderKey(keyData: string): string {
    const parts = parseKeyParts(keyData)
    if (parts.length === 1) {
        return renderSingleKey(parseKey(parts[0]))
    }
    let html = ""
    for (let i = 0; i < parts.length; i++) {
        if (i > 0) html += '<span class="key-then"></span>'
        html += renderSingleKey(parseKey(parts[i]))
    }
    return html
}

function escapeHtml(text: string): string {
    const div = document.createElement("div")
    div.textContent = text
    return div.innerHTML
}

interface Binding {
    key: string
    description: string
    command: string
}

function renderCategory(name: string, bindings: Binding[]): string {
    let html = `<section class="category-section">`
    html += `<h2 class="category-title">${escapeHtml(name)}</h2>`
    html += `<div class="bindings-list">`
    for (const binding of bindings) {
        html += `<div class="binding-row">`
        html += `<span class="description">${escapeHtml(binding.description)}</span>`
        html += `<div class="key-container">${renderKey(binding.key)}</div>`
        html += `</div>`
    }
    html += `</div></section>`
    return html
}

async function getConfigMap(
    configKey: string,
): Promise<Record<string, string> | null> {
    try {
        return await config.getAsync(configKey as any)
    } catch (e) {
        console.warn(`Failed to get ${configKey}:`, e)
        return null
    }
}

async function renderMode(modeName: string): Promise<void> {
    const modeConfig = MODE_CONFIG[modeName as keyof typeof MODE_CONFIG]
    if (!modeConfig) return

    const container = document.getElementById("cheatsheet-content")
    if (!container) return
    container.innerHTML = '<div class="loading">Loading...</div>'

    let configMap = await getConfigMap(modeConfig.configKey)

    // Merge imaps + inputmaps for insert mode
    if (modeName === "insert") {
        const imaps = await getConfigMap("imaps")
        const inputmaps = await getConfigMap("inputmaps")
        configMap = { ...imaps, ...inputmaps }
    }

    if (!configMap) {
        container.innerHTML =
            '<div class="error">Could not load keybindings</div>'
        return
    }

    // Group by category
    const categorized: Record<string, Binding[]> = {}

    for (const [key, command] of Object.entries(configMap)) {
        if (SKIP_KEYS.has(key)) continue

        const { desc, cat } = parseCommand(command)
        const binding: Binding = { key, description: desc, command }

        if (!categorized[cat]) categorized[cat] = []
        categorized[cat].push(binding)
    }

    // Sort categories by order
    const sortedCategories = Object.entries(categorized).sort(
        (a, b) =>
            (CATEGORIES[a[0]]?.order || 99) - (CATEGORIES[b[0]]?.order || 99),
    )

    container.innerHTML = ""
    for (const [catKey, bindings] of sortedCategories) {
        const catName = CATEGORIES[catKey]?.name || catKey
        container.innerHTML += renderCategory(catName, bindings)
    }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    renderMode("normal")

    const modeSelector = document.getElementById("mode-selector")
    if (!modeSelector) return

    modeSelector.addEventListener("click", e => {
        const target = e.target as HTMLElement
        if (target.tagName !== "BUTTON") return

        const active = modeSelector.querySelector(".active")
        if (active) active.classList.remove("active")
        target.classList.add("active")

        const mode = target.dataset.mode
        if (mode) renderMode(mode)
        window.scrollTo({ top: 0 })
    })
})

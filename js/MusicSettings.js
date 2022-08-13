const initMusicSetting = (_container, _onSettingChanged) => {
	const settingList = {}

	let savedSettings = localStorage.getItem("OBS_music_plugin")
	if (savedSettings == undefined) {
		savedSettings = {
			volume: 0.20,
			textFont: "Monospace",
			textColor: "#CCCCCC",
			textSize: 24,
			randomPlaylist: true
		}
	} else {
		savedSettings = JSON.parse(savedSettings)
	}

	const updateSettings = () => {
		const tmpData = {}

		Object.keys(settingList).forEach(_settingKey => {
			tmpData[_settingKey] = settingList[_settingKey].getValue()
		})

		localStorage.setItem("OBS_music_plugin", JSON.stringify(tmpData))

		_onSettingChanged(tmpData)
	}

	const createSetting = (_name, _label, _inputType) => {
		const tmpLabel = document.createElement("label")

		const tmpText = document.createElement("span")
		tmpText.innerHTML = _label
		tmpLabel.append(tmpText)


		const tmpInput = document.createElement("input")
		tmpLabel.append(tmpInput)

		if (_inputType != undefined) {
			tmpInput.setAttribute("type", _inputType)
		}

		tmpInput.addEventListener("input", updateSettings)

		settingList[_name] = {
			label: tmpLabel,
			text: tmpText,
			input: tmpInput,
			getValue: () => tmpInput.value
		}

		return settingList[_name]
	}

	// ============================================================================================

	const volumeSetting = createSetting("volume", "Volume", "range")

	volumeSetting.input.setAttribute("min", "0.0")
	volumeSetting.input.setAttribute("max", "1.0")
	volumeSetting.input.setAttribute("step", "0.01")

	volumeSetting.input.value = savedSettings.volume

	// ============================================================================================

	const textColorSetting = createSetting("textColor", "Text color", "text")

	textColorSetting.input.value = savedSettings.textColor

	// ============================================================================================

	const textFontSetting = createSetting("textFont", "Font", "text")
	textFontSetting.input.value = savedSettings.textFont

	// ============================================================================================

	const textSizeSetting = createSetting("textSize", "Text size", "number")

	textSizeSetting.input.setAttribute("min", "10")
	textSizeSetting.input.setAttribute("step", "1")

	textSizeSetting.input.value = savedSettings.textSize

	// ============================================================================================

	const randomSetting = createSetting("randomPlaylist", "Shuffle", "checkbox")

	randomSetting.getValue = () => { return randomSetting.input.checked }

	randomSetting.input.checked = savedSettings.randomPlaylist

	// ============================================================================================

	Object.values(settingList).forEach(_setting => {
		_container.append(_setting.label)
	})

	updateSettings()
}
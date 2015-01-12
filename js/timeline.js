      /* Hook up the Talkie integration to our map */
      var tl = TalkieLeaflet(map);

      /* Talkie timeline config */
      var timeline = Talkie.timeline("#song", {
		"00:19": tl.setView([42.48, -79.335], 13), // Dunkirk
		"00:50": tl.setView([42.392, -79.088], 9), // Chautauqua co.
		"01:00": tl.setView([42.462, -79.327], 12), // Fredonia/Dunkirk
		"01:06": tl.setView([42.096, -79.238], 12), // Jamestown
		"01:12": tl.setView([42.047, -79.264], 11), // Sugargrove/Jamestown
		"01:32": tl.setView([42.5188, -78.992], 16), // E Pettit
		"01:36": tl.setView([42.5188, -78.992], 14), // E Pettit
		"01:57": tl.setView([42.469, -79.18], 14), // Forestville
		"02:14": tl.setView([42.337, -79.071], 12), // Cherry Creek/South Dayton
		"02:20": tl.setView([42.294, -79.1012], 16), // G Frost
		"02:29": tl.setView([42.322, -79.578], 14), // Westfield
		"02:39": tl.setView([42.3247, -79.576], 16), // R Johnson
		"03:06": tl.setView([42.096, -79.238], 12), // Jamestown
		"03:52": tl.setView([42.392, -79.088], 9), // Chautauqua co.
		"04:06": tl.setView([40.0141, -83.0309], 16), // Ohio State
		"04:42": tl.setView([42.392, -79.088], 9), // Chautauqua co.
		"04:48": tl.setView([42.096, -79.238], 12), // Jamestown
		"04:53": tl.setView([42.096, -79.235], 18), // E Foote
		"05:40": tl.setView([42.392, -79.088], 9), // Chautauqua co.
		"06:04": tl.setView([42.48, -79.335], 13), // Dunkirk
		"06:06": tl.setView([42.322, -79.578], 14), // Westfield
		"06:09": tl.setView([42.545, -79.166], 14), // Silver Creek
		"06:15": tl.setView([41.921, -79.639], 14), // Cory PA
		"06:18": tl.setView([41.921, -79.639], 10), // Cory PA
		"06:27": tl.setView([42.047, -79.264], 11), // Sugargrove/Jamestown
		"06:32": tl.setView([42.159, -79.397], 11), // Chautauqua Lake
		"06:38": tl.setView([42.096, -79.238], 12), // Jamestown
		"06:50": tl.setView([42.384, -78.997], 12), // Catt Co
		"07:04": tl.setView([42.474, -78.484], 10), // Rt 16 
		"07:28": tl.setView([42.74, -78.133], 14), // Warsaw
		"07:35": tl.setView([42.267, -79.71], 14), // Ripley
		"07:53": tl.setView([42.392, -79.088], 9), // Chautauqua co.
		"08:40": tl.setView([42.293, -79.017], 15), // Leon
		"08:49": tl.setView([42.462, -79.327], 12), // Fredonia/Dunkirk
		"09:11": tl.setView([42.392, -79.088], 9), // Chautauqua co.
		"09:18": tl.setView([42.162, -78.976], 16), // Randolph
		"09:34": tl.setView([42.392, -79.088], 9), // Chautauqua co.
		"10:02": tl.setView([42.09128, -79.24027], 18), // Julia Haul
		"11:02": tl.setView([42.0137, -79.2343], 18), // R Chapin
		"11:36": tl.setView([42.392, -79.088], 9) // Chautauqua co.
      });

      // Tell TalkieLeaflet that we want to revert user changes to the map view
      //
      // If we don’t call this, then the scripted setViews will still work but
      // user changes will not pause the timeline or be reverted.
       tl.undoViewChanges(timeline);
const fs = require('fs');                                                                                                                                                                           
const path = require('path');                                                                                                                                                                       
const os = require('os');                                                                                                                                                                           
                                                                                                                                                                                                    
// Path to VS Code settings                                                                                                                                                                         
const settingsPath = path.join(os.homedir(), '.vscode', 'settings.json');                                                                                                                           
                                                                                                                                                                                                    
// Define new terminal colors based on extracted colors                                                                                                                                             
colors = {                                                                                                                                                                                          
    'terminal.background': '#1d1f21',                                                                                                                                                               
    'terminal.foreground': '#c5c8c6',                                                                                                                                                               
    'terminalCursor.background': '#ffffff',                                                                                                                                                         
    'terminalCursor.foreground': '#ffffff'                                                                                                                                                          
};                                                                                                                                                                                                  
                                                                                                                                                                                                    
// Update the settings file                                                                                                                                                                         
let settings = {};                                                                                                                                                                                  
if (fs.existsSync(settingsPath)) {                                                                                                                                                                  
    settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));                                                                                                                                   
}                                                                                                                                                                                                   
                                                                                                                                                                                                    
// Merge the new colors with existing settings                                                                                                                                                      
Object.assign(settings, colors);                                                                                                                                                                    
                                                                                                                                                                                                    
// Write updated settings back to file                                                                                                                                                              
fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 4));                                                                                                                                  
                                                                                                                                                                                                    
'VS Code terminal colors updated.';                
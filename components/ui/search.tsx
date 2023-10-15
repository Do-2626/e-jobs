function search() {
    const
        span: React.CSSProperties = {
            boxSizing: 'border-box',
            color: 'rgb(2, 8, 23)',
            display: 'block',
            height: 'var(--base-size-16, 1rem)',
            left: 'var(--base-size-8, 0.5rem)',
            pointerEvents: 'none',
            position: 'absolute',
            top: 'var(--base-size-8, 0.5rem)',
            width: 'var(--base-size-16, 1rem)'
        },

        div: React.CSSProperties = {

            boxSizing: 'border-box',

            display: 'grid',

            position: 'relative',

            // backgroundColor: 'blanchedalmond'
        },

        svg: React.CSSProperties = {

            color: 'rgb(2, 8, 23)',
            boxSizing: 'border-box',
            overflow: 'visible',
            fill: 'currentColor',
            userSelect: 'none',
        },

        input: React.CSSProperties = {
            color: 'rgb(2, 8, 23)',
            boxSizing: 'border-box',
            font: 'inherit',
            margin: 0,
            fontFamily: 'inherit',
            backgroundColor: 'rgb(255, 255, 255)',
            border: 'var(--borderWidth-thin, max(1px, 0.0625rem)) solid var(--control-borderColor-rest, var(--color-border-default))',
            borderRadius: 'var(--borderRadius-medium, 0.375rem)',
            fontSize: 'var(--text-body-size-medium, 0.875rem)',
            lineHeight: 'var(--text-body-lineHeight-medium, 1.4285)',
            paddingBlock: 'calc(var(--control-medium-paddingBlock, 6px) - var(--borderWidth-thin, 1px))',
            paddingInline: 'var(--control-medium-paddingInline-condensed, 0.5rem)',
            transition: '80ms cubic-bezier(0.33, 1, 0.68, 1)',
            transitionProperty: 'color, background-color, box-shadow, border-color',
            paddingInlineStart: 'calc(var(--control-medium-paddingInline-condensed, 0.5rem) + var(--base-size-16, 1rem) + var(--control-medium-gap, 0.5rem))'
        }
    let style = {
        span,
        div,
        svg,
        input
    }

    return (
        <>
            <div className="flex justify-center gap-2">
                <div style={style.div}>
                    <span style={style.span}>
                        <svg style={style.svg} aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" >
                            <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
                        </svg>
                    </span>

                    <input style={style.input} className="box-border m-0 overflow-visible w-full" placeholder="Search " aria-label="Search stars" aria-describedby="validation-34218b39-8273-4b17-8e6e-c1d92912d28e" type="search" data-test-selector="stars-repo-filter" data-target="primer-text-field.inputElement " name="q" id="q" />
                </div>


                <>
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                '\n  .btn {\n    -webkit-text-size-adjust: 100%;\n    color-scheme: dark;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";\n    word-wrap: break-word;\n    box-sizing: border-box;\n    position: relative;\n    display: inline-block;\n    padding: 5px 16px;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 20px;\n    white-space: nowrap;\n    vertical-align: middle;\n    cursor: pointer;\n    user-select: none;\n    border: 1px solid;\n    border-radius: 6px;\n    appearance: none;\n    color: rgb(2, 8, 23);\n    background-color: rgb(255, 255, 255);\n    border-color: rgba(240, 246, 252, 0.1);\n    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;\n    list-style: none;\n    transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);\n    transition-property: color, background-color, box-shadow, border-color;\n  }\n\n  .octicon {\n    -webkit-text-size-adjust: 100%;\n\n    color-scheme: dark;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";\n    word-wrap: break-word;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 20px;\n    white-space: nowrap;\n    cursor: pointer;\n    user-select: none;\n    list-style: none;\n    height: 16;\n    width: 16;\n    box-sizing: border-box;\n    display: inline-block;\n    overflow: visible !important;\n    fill: currentColor;\n    margin-right: -4px;\n    margin-left: 8px;\n    color: rgb(125, 133, 144);\n    vertical-align: text-bottom;\n  }\n'
                        }}
                    />
                    <summary role="button" data-view-component="true" className="btn">
                        {" "}
                        Type: All
                        <svg
                            aria-hidden="true"
                            height={16}
                            viewBox="0 0 16 16"
                            version="1.1"
                            width={16}
                            data-view-component="true"
                            className="octicon"
                        >
                            <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                        </svg>
                    </summary>
                </>
            </div>
        </>
    )
}

export default search

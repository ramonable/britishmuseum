if (!('bind' in Function.prototype)) {
    Function.prototype.bind= function(owner) {
        var that= this;
        var args= Array.prototype.slice.call(arguments, 1);
        return function() {
            return that.apply(owner,
                args.length===0? arguments : arguments.length===0? args :
                args.concat(Array.prototype.slice.call(arguments, 0))
            );
        };
    };
}

/*
 * MemberEvents - Toggle member-only events
 * <div class="columns columns-events column-third clearfix">
    <div class="aside">
        <p>
            Show Member Events
            <span class="toggle-button active" id="label-member-events">
                <input type="checkbox" id="trigger-members-events" checked="checked">
                <label data-on="ON" data-off="OFF"></label>
            </span>
        </p>
    </div>
    ...
    <?php echo $this->Html->script('event-members-toggle.js'); ?>
 */

/*
 * CONFIGURATION
 */

var nm = {
    config: {
        togglebutton: {
            id : 'trigger-members-events',
            label: 'label-member-events'
        },
        events: {
            containerEl: '.columns-events',
            headerEl: '.hd-events',
            el : '.entry-events',
            data: 'data-members-only',
            classname: 'entry entry-events col-third',
            classnameLeft: 'entry entry-events col-third col-left',
            classnameRight: 'entry entry-events col-third col-right'
        },
    },
    constructors: {}
};


Array.prototype.allValuesTrue = function() {
    for(var i = 0; i < this.length; i++){
        if(this[i] === false)
            return false;
    }
    return true;
}

// MemberEvents - Toggle member-only events
nm.constructors.MemberEvents = function(element){
    var self = this;
    this.$toggle = document.getElementById(nm.config.togglebutton.id);
    this.$weeks = this.seekAllWeeks();
    this.weeks_length = this.$weeks.length;

    this.$events = [];
    for( var i = 0; i < this.weeks_length; i++ ){
        var week = this.$weeks[i];
        this.$events[i] = this.seekAllEvents(week);
    }

    this.bind();
    this.toggle(self.$toggle);
}

nm.constructors.MemberEvents.prototype.isEventMembersOnly = function(el){
    var is_members_only = !!parseInt(el.getAttribute(nm.config.events.data), 10);
    return is_members_only;
}

nm.constructors.MemberEvents.prototype.seekAllWeeks = function(){
    var weeks = $(nm.config.events.headerEl, nm.config.events.containerEl);
    return weeks;
}

nm.constructors.MemberEvents.prototype.seekAllEvents = function(week_el){
    var events = $(nm.config.events.el, week_el.parentElement);
    return events;
}

nm.constructors.MemberEvents.prototype.bind = function(){
    var self = this;
    if (this.$toggle.addEventListener) {
      this.$toggle.addEventListener('change', self.toggle.bind(this));
    } else if (this.$toggle.attachEvent)  {
      $(self.$toggle).click(function(e){
        self.toggle(e);
      })
    }
    // this.$toggle.addEventListener('change', self.toggle.bind(this));
}

nm.constructors.MemberEvents.prototype.toggle = function(e){
    var self = this;
    var $el = e.id == nm.config.togglebutton.id ? e : e.target;
    var members_only_is_checked = $el.checked;
    var week_has_member_events = [];

    for( var i = 0; i < this.weeks_length; i++ ){
        this.$weeks[i].style.display = 'block';
        week_has_member_events[i] = [];
        var visible_index = 0;
        for( var j = 0; j < this.$events[i].length; j++ ){
            var event = this.$events[i][j];
            week_has_member_events[i][j] = false;
            var members_only_event = this.isEventMembersOnly(event);
            event.style.display = 'block';
            event.className = nm.config.events.classname;

            if( members_only_event ){
                week_has_member_events[i][j] = true;
            }
            if( members_only_is_checked ){
                $el.parentElement.className = 'toggle-button active';
                // update classnames of all events
                this.updateClassNames(event, j);
            } else {
                $el.parentElement.className = 'toggle-button';

                // toggle visibility events
                if( members_only_event ){
                    event.style.display = 'none';
                } else {
                    // update classnames of visible events
                    this.updateClassNames(event, visible_index);
                    visible_index++;
                }
            }
        }
        // toggle visibility weeks
        if( (week_has_member_events[i].allValuesTrue() && week_has_member_events[i].length > 1) || week_has_member_events[i].allValuesTrue() && week_has_member_events[i].length == 1 ){
            if( !members_only_is_checked ){
                this.$weeks[i].style.display = 'none';
            }
        }
    }
}

nm.constructors.MemberEvents.prototype.updateClassNames = function(el, index){
    if( index % 3 == 0 ){
        el.className = nm.config.events.classnameLeft;
    } else if( index % 3 == 2 ){
        el.className = nm.config.events.classnameRight;
    }
}

var members_events = new nm.constructors.MemberEvents();
